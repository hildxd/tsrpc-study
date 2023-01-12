import { Post, PostFull } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAddPost
  extends BaseRequest,
    Pick<Post, "title" | "content"> {}

export interface ResAddPost extends BaseResponse, Pick<PostFull, "id"> {}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
