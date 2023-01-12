import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import {
  ReqGetAllPost,
  ResGetAllPost,
} from "../../shared/protocols/post/PtlGetAllPost";

export default async function (call: ApiCall<ReqGetAllPost, ResGetAllPost>) {
  const allPosts = await db.post.findMany();
  console.log(allPosts);
  call.succ({
    posts: allPosts,
    count: 10,
  });
}
