import { Tag } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetAll extends BaseRequest {}

export interface ResGetAll extends BaseResponse {
  tags: Tag[];
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
