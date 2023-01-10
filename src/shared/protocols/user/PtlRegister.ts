import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqRegister extends BaseRequest {
  username: string;
  password: string;
}

export interface ResRegister extends BaseResponse {
  uid: string;
  _token: string;
}

export const conf: BaseConf = {
  auths: {
    type: "EVERY",
    roles: [],
  },
};
