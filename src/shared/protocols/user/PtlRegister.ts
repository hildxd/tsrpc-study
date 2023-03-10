import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqRegister extends BaseRequest {
  username: string;
  password: string;
}

export interface ResRegister extends BaseResponse {
  _token: string;
}

export const conf: BaseConf = {};
