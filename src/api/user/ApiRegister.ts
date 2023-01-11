import { ApiCall } from "tsrpc";
import {
  ReqRegister,
  ResRegister,
} from "../../shared/protocols/user/PtlRegister";
import redis from "../../kernel/redis";
import { getUserId } from "../../utils/nanoid";
import bcrypt from "bcryptjs";

export default async function (call: ApiCall<ReqRegister, ResRegister>) {
  let op = await call.collection("User").findOne({
    username: call.req.username,
  });
  if (op) {
    call.error("用户名已存在");
    return;
  }
  let userId = getUserId();
  const password = bcrypt.hashSync(call.req.password, 8);
  await call.collection("User").insertOne({
    username: call.req.username,
    password,
    uid: userId,
    roles: [],
  });

  const token = await redis.setToken(userId, { uid: userId });
  call.succ({
    _token: token,
  });
}
