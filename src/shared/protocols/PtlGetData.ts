import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqGetData extends BaseRequest {}

export interface ResGetData extends BaseResponse {
  content: string;
}

export const conf: BaseConf = {
  auths: {
    roles: ["admin"],
  },
};
