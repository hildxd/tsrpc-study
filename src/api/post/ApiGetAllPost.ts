import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import {
  ReqGetAllPost,
  ResGetAllPost,
} from "../../shared/protocols/post/PtlGetAllPost";

export default async function (call: ApiCall<ReqGetAllPost, ResGetAllPost>) {
  const { page, pageSize } = call.req;
  const allPosts = await db.post.findMany({
    where: { authorId: call.userId },
    skip: page === -1 ? 0 : (page - 1) * pageSize,
    take: page !== -1 ? pageSize : undefined,
  });
  const count = await db.post.count({
    where: { authorId: call.userId },
  });
  call.succ({
    count: count,
    posts: allPosts,
  });
}
