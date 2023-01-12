import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { omit } from "lodash";
import {
  ReqUpdatePost,
  ResUpdatePost,
} from "../../shared/protocols/post/PtlUpdatePost";

export default async function (call: ApiCall<ReqUpdatePost, ResUpdatePost>) {
  const { tagId: newTagsId } = call.req;
  const data = omit(call.req, ["tagId"]);

  let updateTag = newTagsId
    ? {
        tags: {
          deleteMany: {},
          create: newTagsId.map((id) => ({
            tag: { connect: { id } },
          })),
        },
      }
    : {};
  try {
    await db.$transaction(async (_) => {
      await db.post.update({
        where: {
          id: call.req.id,
        },
        data: {
          ...data,
          ...updateTag,
        },
        include: { tags: true },
      });
      call.succ({
        message: "success",
      });
    });
  } catch (err) {
    console.error(err);
    call.error("更新失败");
  }
}
