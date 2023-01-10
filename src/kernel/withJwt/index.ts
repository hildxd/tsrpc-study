import { ApiCall, HttpServer, WsServer } from "tsrpc";
import { get } from "lodash";
import { BaseRequest, BaseResponse } from "../../shared/protocols/base";
import * as Http from "http";
import { URLSearchParams } from "url";
import * as jwt from "jsonwebtoken";
import env from "../../env";

export function withJwt(server: HttpServer | WsServer) {
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
        console.log(`${getUserId(token)}`);
      }
      return node;
    }
  );
}

function getUserId(_token: string): string | undefined {
  try {
    const data = jwt.verify(_token, env.SECRET);
    console.log(data);
    return "";
  } catch {
    return undefined;
  }
}
