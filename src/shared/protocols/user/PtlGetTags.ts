import { Tag } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetTags extends BaseRequest {}

export interface ResGetTags extends BaseResponse {
  tags: Tag[];
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
