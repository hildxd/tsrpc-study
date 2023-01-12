import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqAddPost, ResAddPost } from "../../shared/protocols/post/PtlAddPost";

export default async function (call: ApiCall<ReqAddPost, ResAddPost>) {
  try {
    const post = await db.post.create({
      data: {
        title: call.req.title,
        content: call.req.content,
        author: {
          connect: {
            uid: call.userId,
          },
        },
      },
    });
    call.succ({
      ...post,
    });
  } catch (err) {
    call.error("创建文章失败");
  }
}
