import { Collection, Db, MongoClient, OptionalId } from "mongodb";
import { ApiCall, HttpServer } from "tsrpc";
import { DbUser } from "../db/DbUser";
import env from "../env";
import { BaseRequest, BaseResponse } from "../shared/protocols/base";

export async function initDb(server: HttpServer) {
  const client = await new MongoClient(env.DATABASE_URL).connect();
  const db: Db = client.db();
  const collection = <T extends keyof DbCollectionType>(
    col: T
  ): Collection<OptionalId<DbCollectionType[T]>> => {
    return db.collection(col);
  };

  server.flows.preApiCallFlow.push(
    async (node: ApiCall<BaseRequest, BaseResponse, any>) => {
      node.collection = collection;
      return node;
    }
  );
}

export interface DbCollectionType {
  User: DbUser;
}
