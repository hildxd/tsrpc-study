import { Post } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetAllPost extends BaseRequest {
  page: number;
  pageSize: number;
}

export interface ResGetAllPost extends BaseResponse {
  posts: Post[];
  count: number;
}

export const conf: BaseConf = {
  auths: {
    roles: [],
  },
};
