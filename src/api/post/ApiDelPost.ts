import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqDelPost, ResDelPost } from "../../shared/protocols/post/PtlDelPost";

export default async function (call: ApiCall<ReqDelPost, ResDelPost>) {
  await db.$transaction(async (_) => {
    try {
      await db.post.delete({
        where: { id: call.req.id, authorId: call.userId },
      });

      await db.post_Tag.deleteMany({
        where: { postId: call.req.id },
      });

      call.succ({
        message: "删除成功",
      });
    } catch (err) {
      call.error("删除失败");
    }
  });
}
