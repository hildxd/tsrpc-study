import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqAdd, ResAdd } from "../../shared/protocols/tag/PtlAdd";

export default async function (call: ApiCall<ReqAdd, ResAdd>) {
  const tag = await db.tag.create({
    data: {
      name: call.req.name,
      userId: call.userId!,
    },
  });
  call.succ({
    id: tag.id,
  });
}
