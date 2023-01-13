import { omit } from "lodash";
import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqUpdate, ResUpdate } from "../../shared/protocols/tag/PtlUpdate";

export default async function (call: ApiCall<ReqUpdate, ResUpdate>) {
  const exists = await db.tag.findFirst({
    where: {
      id: call.req.id,
      userId: call.userId,
    },
  });
  if (!exists) {
    call.error("不存在");
    return;
  }
  const updateData = omit(call.req, ["id"]);
  await db
    .$transaction(async (_) => {
      await db.tag.update({
        where: {
          id: call.req.id,
          userId: call.userId,
        },
        data: {
          ...updateData,
        },
      });
      call.succ({
        message: "更新成功",
      });
    })
    .then(() => call.error("更新失败"));
}
