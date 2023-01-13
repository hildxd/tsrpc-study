import { ApiCall } from "tsrpc";
import { ReqGetUserInfo, ResGetUserInfo } from "../../shared/protocols/user/PtlGetUserInfo";

export default async function (call: ApiCall<ReqGetUserInfo, ResGetUserInfo>) {
    // TODO
    call.error('API Not Implemented');
}