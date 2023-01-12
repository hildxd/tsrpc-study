import { ApiCall } from "tsrpc";
import db from "../../kernel/db";
import redis from "../../kernel/redis";
import {
  ReqChangeRole,
  ResChangeRole,
} from "../../shared/protocols/user/PtlChangeRole";

export default async function (call: ApiCall<ReqChangeRole, ResChangeRole>) {
  try {
    await db.user.update({
      where: { uid: call.req.uid },
      data: { roles: call.req.roles },
    });
    await redis.setRoles(call.req.uid, call.req.roles);
    call.succ({
      message: "修改成功",
    });
  } catch (err) {
    call.error("用户不存在");
  }
}
