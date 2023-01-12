import { ApiCall } from "tsrpc";
import { ReqDelPost, ResDelPost } from "../../shared/protocols/post/PtlDelPost";

export default async function (call: ApiCall<ReqDelPost, ResDelPost>) {
    // TODO
    call.error('API Not Implemented');
}