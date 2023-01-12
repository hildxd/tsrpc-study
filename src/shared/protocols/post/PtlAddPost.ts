import { Post } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqAddPost
  extends BaseRequest,
    Pick<Post, "title" | "content"> {
  tagId: number[];
}

export interface ResAddPost extends BaseResponse, Pick<Post, "id"> {}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
