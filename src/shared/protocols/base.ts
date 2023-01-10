export interface BaseRequest {}

export interface BaseResponse {}

export interface BaseConf {
  auths?: {
    type?: "SOME" | "EVERY";
    roles: string[];
  };
}
