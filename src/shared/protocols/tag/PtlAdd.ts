import { Tag } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAdd extends BaseRequest, Pick<Tag, "name"> {}

export interface ResAdd extends BaseResponse, Pick<Tag, "id"> {}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
