export interface SessionData {
  [key: string]: [number | null | undefined, any] | any;
}

export interface PublicData extends SessionData {
  /** [穿透数据] Session 相关数据存储 数据校验，丢失将无法验证，publicData 会被设为空 **/
  _hash?: string;
}
export interface BaseRequest {
  /** [穿透数据] Session 相关数据存储，可以读取 修改无效 **/
  _publicData?: PublicData;
  _timestamp?: number;
  _token?: string;
}

export interface BaseResponse {
  /** [穿透数据] Session 相关数据存储，可以读取 修改无效 **/
  _publicData?: PublicData;
  _timestamp?: number;
}

export interface BaseConf {
  auths?: {
    type?: "SOME" | "EVERY";
    roles: string[];
  };
}
