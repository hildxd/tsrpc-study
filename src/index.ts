import * as path from "path";
import { HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";
import { DbCollectionType, initDb } from "./kernel/db";
import { Collection, OptionalId } from "mongodb";
import { withJwt } from "./kernel/withJwt";
import { Enforcer } from "casbin";
import { withCasbin } from "./kernel/withCasbin";

// Create the Server
const server = new HttpServer(serviceProto, {
  port: 3000,
  // Remove this to use binary mode (remove from the client too)
  json: true,
});

// Initialize before server start
async function init() {
  // Auto implement APIs
  await server.autoImplementApi(path.resolve(__dirname, "api"));

  await withJwt(server);
  await withCasbin(server, path.resolve(__dirname, "model.conf"));
  await initDb(server);
}

// Entry function
async function main() {
  await init();
  await server.start();
}
main();

declare module "tsrpc" {
  export interface ApiCall {
    // userId
    userId?: string;
    // mongodb
    collection: <T extends keyof DbCollectionType>(
      col: T
    ) => Collection<OptionalId<DbCollectionType[T]>>;
    // 用户角色
    userRoles?: string[];
    // casbin 权限处理
    casbin?: Enforcer;
  }
}
