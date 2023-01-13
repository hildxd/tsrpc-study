import Redis, { RedisOptions } from "ioredis";
import * as jwt from "jsonwebtoken";
import env from "../env";

export const USER_TTL = 60 * 60 * 24 * 7; // 7 days

class RedisHelper extends Redis {
  async setCacheKey(key: string, value: string, ttl = 60 * 10) {
    await this.set(`cache:${key}`, value, "EX", ttl);
  }

  async getCacheKey(key: string): Promise<string | null> {
    return this.get(`cache:${key}`);
  }

  async delCacheKey(key: string): Promise<number> {
    return this.del(`cache:${key}`);
  }

  async setSessionKey(key: string, value: string, ttl = 60 * 60 * 24 * 7) {
    await this.set(`session:${key}`, value, "EX", ttl);
  }

  async setToken(
    key: string,
    value: Record<string, any>,
    ttl = 60 * 60 * 24 * 7
  ) {
    let token = jwt.sign(value, env.SECRET);
    await this.set(`token:${key}`, token, "EX", ttl);
    return token;
  }

  async delToken(uid: string) {
    await this.del(`token:${uid}`);
  }

  async setRoles(uid: string, value: string[]) {
    await this.set(`roles:${uid}`, value.join(","));
  }

  async getRoles(uid: string): Promise<string[]> {
    const data = await this.get(`roles:${uid}`);
    if (data) {
      return data.split(",");
    }
    return [];
  }
}

export const redisOptions: RedisOptions = {
  host: "127.0.0.1",
  port: 6379,
  db: 1,
};

export const redis = new RedisHelper({
  ...redisOptions,
  db: 0,
  enableOfflineQueue: true,
  offlineQueue: true,
});

export default redis;
