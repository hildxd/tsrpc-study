import { PostFull } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetPost extends BaseRequest, Pick<PostFull, "id"> {}

export interface ResGetPost extends BaseResponse {
  post: PostFull;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
