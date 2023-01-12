import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqGetAll, ResGetAll } from "../../shared/protocols/tag/PtlGetAll";

export default async function (call: ApiCall<ReqGetAll, ResGetAll>) {
  const data = await db.tag.findMany({
    where: {
      userId: call.userId,
    },
  });
  call.succ({
    tags: data,
  });
}
