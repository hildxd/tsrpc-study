import { ApiCall } from "tsrpc";
import redis from "../../kernel/redis";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";
import * as argon2 from "argon2";
import db from "../../kernel/db";

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
  let user = await db.user.findUnique({
    where: { username: call.req.username },
  });
  if (!user) {
    call.error("用户不存在");
    return;
  }
  if (!(await argon2.verify(user.password, call.req.password))) {
    call.error("密码错误");
    return;
  }
  const token = await redis.setToken(user.id, { uid: user.id });
  call.succ({
    token,
  });
}
