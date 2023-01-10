import { ApiCall } from "tsrpc";
import { ReqGetData, ResGetData } from "../shared/protocols/PtlGetData";

export default async function (call: ApiCall<ReqGetData, ResGetData>) {
  call.succ({
    content: "sadkjfllj",
  });
}
