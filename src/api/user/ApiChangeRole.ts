import { ApiCall } from "tsrpc";
import redis from "../../kernel/redis";
import {
  ReqChangeRole,
  ResChangeRole,
} from "../../shared/protocols/user/PtlChangeRole";

export default async function (call: ApiCall<ReqChangeRole, ResChangeRole>) {
  let op2 = await call.collection("User").updateOne(
    {
      uid: call.req.uid,
    },
    {
      $set: {
        roles: call.req.roles,
      },
    }
  );
  if (op2.matchedCount === 0) {
    call.error("用户未找到");
    return;
  }
  await redis.setRoles(call.req.uid, call.req.roles);
  call.succ({
    matchedCount: op2.matchedCount,
  });
}
