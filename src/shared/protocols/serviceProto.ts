import { ServiceProto } from 'tsrpc-proto';
import { ReqAddPost, ResAddPost } from './post/PtlAddPost';
import { ReqDelPost, ResDelPost } from './post/PtlDelPost';
import { ReqGetAllPost, ResGetAllPost } from './post/PtlGetAllPost';
import { ReqGetPost, ResGetPost } from './post/PtlGetPost';
import { ReqUpdatePost, ResUpdatePost } from './post/PtlUpdatePost';
import { ReqAdd, ResAdd } from './tag/PtlAdd';
import { ReqGetAll, ResGetAll } from './tag/PtlGetAll';
import { ReqUpdate, ResUpdate } from './tag/PtlUpdate';
import { ReqChangeRole, ResChangeRole } from './user/PtlChangeRole';
import { ReqGetTags, ResGetTags } from './user/PtlGetTags';
import { ReqGetUserInfo, ResGetUserInfo } from './user/PtlGetUserInfo';
import { ReqLogin, ResLogin } from './user/PtlLogin';
import { ReqRegister, ResRegister } from './user/PtlRegister';

export interface ServiceType {
    api: {
        "post/AddPost": {
            req: ReqAddPost,
            res: ResAddPost
        },
        "post/DelPost": {
            req: ReqDelPost,
            res: ResDelPost
        },
        "post/GetAllPost": {
            req: ReqGetAllPost,
            res: ResGetAllPost
        },
        "post/GetPost": {
            req: ReqGetPost,
            res: ResGetPost
        },
        "post/UpdatePost": {
            req: ReqUpdatePost,
            res: ResUpdatePost
        },
        "tag/Add": {
            req: ReqAdd,
            res: ResAdd
        },
        "tag/GetAll": {
            req: ReqGetAll,
            res: ResGetAll
        },
        "tag/Update": {
            req: ReqUpdate,
            res: ResUpdate
        },
        "user/ChangeRole": {
            req: ReqChangeRole,
            res: ResChangeRole
        },
        "user/GetTags": {
            req: ReqGetTags,
            res: ResGetTags
        },
        "user/GetUserInfo": {
            req: ReqGetUserInfo,
            res: ResGetUserInfo
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
            "id": 0,
            "name": "post/AddPost",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 1,
            "name": "post/DelPost",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 11,
            "name": "post/GetAllPost",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 2,
            "name": "post/GetPost",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 4,
            "name": "post/UpdatePost",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 6,
            "name": "tag/Add",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 7,
            "name": "tag/GetAll",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 13,
            "name": "tag/Update",
            "type": "api",
            "conf": {}
        },
        {
            "id": 8,
            "name": "user/ChangeRole",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 12,
            "name": "user/GetTags",
            "type": "api",
            "conf": {
                "auths": {
                    "roles": []
                }
            }
        },
        {
            "id": 14,
            "name": "user/GetUserInfo",
            "type": "api",
            "conf": {}
        },
        {
            "id": 9,
            "name": "user/Login",
            "type": "api",
            "conf": {}
        },
        {
            "id": 10,
            "name": "user/Register",
            "type": "api",
            "conf": {}
        }
    ],
    "types": {
        "post/PtlAddPost/ReqAddPost": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        },
                        "keys": [
                            "title",
                            "content"
                        ],
                        "type": "Pick"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "tagId",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "base/BaseRequest": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_publicData",
                    "type": {
                        "type": "Reference",
                        "target": "base/PublicData"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "_timestamp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "_token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "base/PublicData": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/SessionData"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "_hash",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "base/SessionData": {
            "type": "Interface",
            "indexSignature": {
                "keyType": "String",
                "type": {
                    "type": "Union",
                    "members": [
                        {
                            "id": 0,
                            "type": {
                                "type": "Tuple",
                                "elementTypes": [
                                    {
                                        "type": "Union",
                                        "members": [
                                            {
                                                "id": 0,
                                                "type": {
                                                    "type": "Number"
                                                }
                                            },
                                            {
                                                "id": 1,
                                                "type": {
                                                    "type": "Literal",
                                                    "literal": null
                                                }
                                            },
                                            {
                                                "id": 2,
                                                "type": {
                                                    "type": "Literal"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Any"
                                    }
                                ]
                            }
                        },
                        {
                            "id": 1,
                            "type": {
                                "type": "Any"
                            }
                        }
                    ]
                }
            }
        },
        "../db/index/Post": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "pubished",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "authorId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 6,
                    "name": "updateTime",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "post/PtlAddPost/ResAddPost": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        },
                        "keys": [
                            "id"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "base/BaseResponse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "_publicData",
                    "type": {
                        "type": "Reference",
                        "target": "base/PublicData"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "_timestamp",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "post/PtlDelPost/ReqDelPost": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 2,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        },
                        "keys": [
                            "id"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "post/PtlDelPost/ResDelPost": {
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
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "post/PtlGetAllPost/ReqGetAllPost": {
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
                    "name": "page",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "pageSize",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "post/PtlGetAllPost/ResGetAllPost": {
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
                    "name": "posts",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "count",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "post/PtlGetPost/ReqGetPost": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/PostFull"
                        },
                        "keys": [
                            "id"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "../db/index/PostFull": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "pubished",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "author",
                    "type": {
                        "type": "Reference",
                        "target": "../db/index/User"
                    }
                },
                {
                    "id": 5,
                    "name": "authorId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 7,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 8,
                    "name": "updateTime",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "tags",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Post_Tag"
                        }
                    }
                }
            ]
        },
        "../db/index/User": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "nickName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 7,
                    "name": "updateTime",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        },
        "../db/index/Post_Tag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "postId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "tagId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "post/PtlGetPost/ResGetPost": {
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
                    "name": "post",
                    "type": {
                        "type": "Reference",
                        "target": "../db/index/PostFull"
                    }
                }
            ]
        },
        "post/PtlUpdatePost/ReqUpdatePost": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 3,
                    "type": {
                        "type": "Partial",
                        "target": {
                            "target": {
                                "type": "Reference",
                                "target": "../db/index/Post"
                            },
                            "keys": [
                                "createTime",
                                "updateTime",
                                "authorId"
                            ],
                            "type": "Pick"
                        }
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "tagId",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "post/PtlUpdatePost/ResUpdatePost": {
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
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "tag/PtlAdd/ReqAdd": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        },
                        "keys": [
                            "name"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "../db/index/Tag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "tag/PtlAdd/ResAdd": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        },
                        "keys": [
                            "id"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "tag/PtlGetAll/ReqGetAll": {
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
        "tag/PtlGetAll/ResGetAll": {
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
                    "name": "tags",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        }
                    }
                }
            ]
        },
        "tag/PtlUpdate/ReqUpdate": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseRequest"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "type": "Partial",
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        }
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "IndexedAccess",
                        "index": "id",
                        "objectType": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        }
                    }
                }
            ]
        },
        "tag/PtlUpdate/ResUpdate": {
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
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                }
            ]
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
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "user/PtlGetTags/ReqGetTags": {
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
        "user/PtlGetTags/ResGetTags": {
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
                    "name": "tags",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        }
                    }
                }
            ]
        },
        "user/PtlGetUserInfo/ReqGetUserInfo": {
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
        "user/PtlGetUserInfo/ResGetUserInfo": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "base/BaseResponse"
                    }
                },
                {
                    "id": 1,
                    "type": {
                        "target": {
                            "type": "Reference",
                            "target": "../db/index/UserFull"
                        },
                        "keys": [
                            "uid",
                            "nickName",
                            "tags",
                            "posts"
                        ],
                        "type": "Pick"
                    }
                }
            ]
        },
        "../db/index/UserFull": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "uid",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "nickName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "posts",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Post"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "roles",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "createTime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 8,
                    "name": "updateTime",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "tags",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../db/index/Tag"
                        }
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
                    "id": 0,
                    "name": "_token",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        }
    }
};