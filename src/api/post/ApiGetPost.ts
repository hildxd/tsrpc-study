import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqGetPost, ResGetPost } from "../../shared/protocols/post/PtlGetPost";

export default async function (call: ApiCall<ReqGetPost, ResGetPost>) {
  const post = await db.post.findFirst({
    where: { id: call.req.id },
    include: { tags: true, author: true },
  });

  if (!post) {
    call.error("文章不存在");
    return;
  }

  call.succ({
    post: post,
  });
}
