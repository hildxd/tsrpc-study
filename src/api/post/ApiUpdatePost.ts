import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import {
  ReqUpdatePost,
  ResUpdatePost,
} from "../../shared/protocols/post/PtlUpdatePost";

export default async function (call: ApiCall<ReqUpdatePost, ResUpdatePost>) {
  const { tagId } = call.req;
  console.dir(call.req);
  const tag = await db.post.update({
    where: {
      id: call.req.id,
    },
    data: {
      Post_Tag: {
        connectOrCreate: {
          where: { postId_tagId: { postId: call.req.id, tagId: tagId! } },
          create: { tagId: tagId! },
        },
      },
    },
    include: { Post_Tag: true },
  });
  console.dir(tag);
  call.succ({
    message: "success",
  });
}
