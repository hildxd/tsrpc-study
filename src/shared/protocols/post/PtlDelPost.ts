import { PostFull } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqDelPost extends BaseRequest, Pick<PostFull, "id"> {}

export interface ResDelPost extends BaseResponse {
  message: string;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
