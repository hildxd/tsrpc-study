import { Tag } from "../../db";
import { BaseRequest, BaseResponse, BaseConf } from "../base";

export interface ReqUpdate extends BaseRequest, Partial<Tag> {
  id: Tag["id"];
}

export interface ResUpdate extends BaseResponse {
  message: string;
}

export const conf: BaseConf = {};
