import { ApiCall } from "tsrpc";
import redis from "../../kernel/redis";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";
import bcrypt from "bcryptjs";
import db from "../../kernel/db";

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
  let user = await db.user.findUnique({
    where: { username: call.req.username },
  });
  if (!user) {
    call.error("用户不存在");
    return;
  }
  if (!bcrypt.compareSync(call.req.password, user.password)) {
    call.error("密码错误");
    return;
  }
  const token = await redis.setToken(user.uid, { uid: user.uid });
  call.succ({
    token,
  });
}
