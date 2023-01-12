import { ApiCall } from "tsrpc";
import { ReqGetPost, ResGetPost } from "../../shared/protocols/post/PtlGetPost";

export default async function (call: ApiCall<ReqGetPost, ResGetPost>) {
    // TODO
    call.error('API Not Implemented');
}