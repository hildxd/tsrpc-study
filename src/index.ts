import * as path from "path";
import { ApiCall, HttpServer, TsrpcError, TsrpcErrorType } from "tsrpc";
import { BaseConf, BaseRequest, BaseResponse } from "./shared/protocols/base";
import { serviceProto } from "./shared/protocols/serviceProto";
import { DbCollectionType, initDb } from "./kernel/db";
import { Collection, OptionalId } from "mongodb";
import { withJwt } from "./kernel/withJwt";

declare module "tsrpc" {
  export interface ApiCall {
    userId?: number;
    collection: <T extends keyof DbCollectionType>(
      col: T
    ) => Collection<OptionalId<DbCollectionType[T]>>;
  }
}

// Create the Server
const server = new HttpServer(serviceProto, {
  port: 3000,
  // Remove this to use binary mode (remove from the client too)
  json: true,
});

server.flows.preApiCallFlow.push(
  async (node: ApiCall<BaseRequest, BaseResponse, any>) => {
    const conf = node.service.conf as BaseConf;
    if (conf.auths) {
    } else {
      await node.error(
        new TsrpcError({
          message: "没有权限",
          code: "NO_AUTH",
          type: TsrpcErrorType.ApiError,
        })
      );
    }
    return node;
  }
);

// Initialize before server start
async function init() {
  // Auto implement APIs
  await server.autoImplementApi(path.resolve(__dirname, "api"));

  await withJwt(server);
  await initDb(server);
}

// Entry function
async function main() {
  await init();
  await server.start();
}
main();
