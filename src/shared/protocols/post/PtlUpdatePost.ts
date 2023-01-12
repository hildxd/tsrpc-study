import { Post } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdatePost extends BaseRequest, Partial<Post> {
  id: Post["id"];
  tagId?: number;
}

export interface ResUpdatePost extends BaseResponse {
  message: string;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
