import { UserFull } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqGetUserInfo extends BaseRequest {}

export interface ResGetUserInfo
  extends BaseResponse,
    Pick<UserFull, "tags" | "posts"> {}

export const conf: BaseConf = {};
