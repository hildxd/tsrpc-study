import { ApiCall } from "tsrpc";
import {
  ReqRegister,
  ResRegister,
} from "../../shared/protocols/user/PtlRegister";
import redis from "../../kernel/redis";
import { getUserId, nanoid } from "../../utils/nanoid";
import * as argon2 from "argon2";
import db from "../../kernel/db";

export default async function (call: ApiCall<ReqRegister, ResRegister>) {
  const user = await db.user.findUnique({
    where: { username: call.req.username },
  });
  if (user) {
    call.error("用户名已存在");
    return;
  }
  let userId = getUserId();
  const password = await argon2.hash(call.req.password);
  await db.user.create({
    data: {
      username: call.req.username,
      nickName: `用户${nanoid(5)}`,
      uid: userId,
      password,
    },
  });
  await redis.setRoles(userId, []);
  const token = await redis.setToken(userId, { uid: userId });
  call.succ({
    _token: token,
  });
}
