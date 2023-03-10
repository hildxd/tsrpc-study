import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqChangeRole extends BaseRequest {
  uid: string;
  roles: string[];
}

export interface ResChangeRole extends BaseResponse {
  message: string;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
