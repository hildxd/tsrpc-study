import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqAddPost, ResAddPost } from "../../shared/protocols/post/PtlAddPost";

export default async function (call: ApiCall<ReqAddPost, ResAddPost>) {
  try {
    const find_post = await db.post.findFirst({
      where: { title: call.req.title, authorId: call.userId },
    });
    if (find_post) {
      call.error("文章标题已存在");
      return;
    }

    await db.$transaction(async (_) => {
      const post = await db.post.create({
        data: {
          title: call.req.title,
          content: call.req.content,
          author: {
            connect: {
              id: call.userId,
            },
          },
        },
      });
      call.succ({
        id: post.id,
      });
    });
  } catch (err) {
    call.error("创建文章失败");
  }
}
