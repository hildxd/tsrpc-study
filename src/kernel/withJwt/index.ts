import { ApiCall, HttpServer, WsServer } from "tsrpc";
import { get } from "lodash";
import { BaseRequest, BaseResponse } from "../../shared/protocols/base";
import * as Http from "http";
import { URLSearchParams } from "url";
import * as jwt from "jsonwebtoken";
import env from "../../env";
import redis from "../redis";

export async function withJwt(server: HttpServer | WsServer) {
  server.flows.preApiCallFlow.push(
    async (node: ApiCall<BaseRequest, BaseResponse, any>) => {
      let token: string | undefined | null = get(node.req, "_token");
      if (!token) {
        const nodeReq = get(node, "conn.httpReq") as
          | Http.IncomingMessage
          | undefined;
        if (nodeReq) {
          const query = nodeReq.url?.split("?")[1];
          const parsedQuery = query ? new URLSearchParams(query) : undefined;
          token = get(nodeReq, "headers.authorization");
          if (!token) {
            token = get(nodeReq, "headers.Authorization") as string;
          }
          if (!token) {
            token = get(nodeReq, "headers.x-token") as string;
          }
          if (!token) {
            token = get(nodeReq, "headers.X-Token") as string;
          }
          if (!token) {
            token = parsedQuery?.get("_token");
          }
        }
      }
      if (token) {
        node.userId = await getUserId(token);
        if (node.userId) {
          node.userRoles = await redis.getRoles(node.userId);
        }
      }
      return node;
    }
  );
}

async function getUserId(_token: string): Promise<string | undefined> {
  try {
    const data = jwt.verify(_token, env.SECRET) as any;
    if (data) {
      const uid = data["uid"];
      const exists = await redis.exists(`token:${uid}`);
      return exists > 0 ? uid : undefined;
    }
    return undefined;
  } catch {
    return undefined;
  }
}
