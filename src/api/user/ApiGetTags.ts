import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import { ReqGetTags, ResGetTags } from "../../shared/protocols/user/PtlGetTags";

export default async function (call: ApiCall<ReqGetTags, ResGetTags>) {
  const tags = await db.user.findFirst({
    where: {
      uid: call.userId,
    },
    include: { Tag: true },
  });
  call.succ({
    tags: tags?.Tag ?? [],
  });
}
