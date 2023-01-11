import { ServiceProto } from 'tsrpc-proto';
import { ReqGetData, ResGetData } from './PtlGetData';
import { ReqChangeRole, ResChangeRole } from './user/PtlChangeRole';
import { ReqLogin, ResLogin } from './user/PtlLogin';
import { ReqRegister, ResRegister } from './user/PtlRegister';

export interface ServiceType {
    api: {
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        },
        "user/ChangeRole": {
            req: ReqChangeRole,
            res: ResChangeRole
        },
        "user/Login": {
            req: ReqLogin,
            res: ResLogin
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
    "version": 10,
    "services": [
        {
            "id": 3,
            "name": "GetData",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": [
                        "admin",
                        "user"
                    ]
                }
            }
        },
        {
            "id": 5,
            "name": "user/ChangeRole",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 4,
            "name": "user/Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 2,
            "name": "user/Register",
            "type": "api",
            "conf": {}
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
        "user/PtlChangeRole/ReqChangeRole": {
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
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "user/PtlChangeRole/ResChangeRole": {
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
                    "name": "matchedCount",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "user/PtlLogin/ReqLogin": {
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
        "user/PtlLogin/ResLogin": {
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
                    "name": "token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
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