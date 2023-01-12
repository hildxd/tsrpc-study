import { Post } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdatePost
  extends BaseRequest,
    Partial<Pick<Post, "createTime" | "updateTime" | "authorId">> {
  id: Post["id"];
  tagId?: number[];
}

export interface ResUpdatePost extends BaseResponse {
  message: string;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
