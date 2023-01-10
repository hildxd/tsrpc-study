import { ApiCall } from "tsrpc";
import redis from "../../kernel/redis";
import { ReqLogin, ResLogin } from "../../shared/protocols/user/PtlLogin";

export default async function (call: ApiCall<ReqLogin, ResLogin>) {
  let op = await call.collection("User").findOne({
    username: call.req.username,
  });
  if (op) {
    const token = await redis.setToken(op.uid, { uid: op.uid });
    call.succ({
      token,
    });
  }
  call.error("用户名不存在");
}
