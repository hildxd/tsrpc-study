import { ApiCall } from "tsrpc";
import redis from "../../kernel/redis";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";
import bcrypt from "bcryptjs";

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
  let op = await call.collection("User").findOne({
    username: call.req.username,
  });
  if (op) {
    if (!bcrypt.compareSync(call.req.password, op.password)) {
      call.error("密码错误");
      return;
    }
    const token = await redis.setToken(op.uid, { uid: op.uid });
    call.succ({
      token,
    });
  }
  call.error("用户名不存在");
}
