import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import {
  ReqGetAllPost,
  ResGetAllPost,
} from "../../shared/protocols/post/PtlGetAllPost";

export default async function (call: ApiCall<ReqGetAllPost, ResGetAllPost>) {
  const allPosts = await db.post.findMany({
    where: { authorId: call.userId },
    skip: (call.req.page - 1) * call.req.pageSize,
    take: call.req.pageSize,
  });
  const count = await db.post.count({
    where: { authorId: call.userId },
  });
  call.succ({
    count: count,
    posts: allPosts,
  });
}
