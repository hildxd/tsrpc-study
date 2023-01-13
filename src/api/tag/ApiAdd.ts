import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqAdd, ResAdd } from "../../shared/protocols/tag/PtlAdd";

export default async function (call: ApiCall<ReqAdd, ResAdd>) {
  try {
    const exists = await db.tag.findFirst({
      where: {
        userId: call.userId!,
      },
    });
    await db.$transaction(async (_) => {
      if (!exists) {
        call.error("已存在");
        return;
      }
      const tag = await db.tag.create({
        data: {
          name: call.req.name,
          userId: call.userId!,
        },
      });
      call.succ({
        id: tag.id,
      });
    });
  } catch (err) {
    call.error("创建失败");
  }
}
