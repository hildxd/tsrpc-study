import { ServiceProto } from 'tsrpc-proto';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqRegister, ResRegister } from './user/PtlRegister';

export interface ServiceType {
    api: {
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "user/Register": {
            req: ReqRegister,
            res: ResRegister
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 4,
    "services": [
        {
            "id": 3,
            "name": "GetData",
            "type": "api",
            "conf": {
                "auths": {
                    "type": "SOME",
                    "roles": []
                }
            }
        },
        {
            "id": 2,
            "name": "user/Register",
            "type": "api",
            "conf": {
                "auths": {
                    "type": "EVERY",
                    "roles": []
                }
            }
        }
    ],
    "types": {
        "PtlGetData/ReqGetData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface"
        },
        "user/PtlRegister/ReqRegister": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlRegister/ResRegister": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                }
            ],
            "properties": [
                {
                    "id": 1,
                    "name": "_token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        }
    }
};