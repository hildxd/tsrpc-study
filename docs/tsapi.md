
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- post
    - [AddPost](#/post/AddPost)
    - [DelPost](#/post/DelPost)
    - [GetAllPost](#/post/GetAllPost)
    - [GetPost](#/post/GetPost)
    - [UpdatePost](#/post/UpdatePost)
- tag
    - [Add](#/tag/Add)
    - [GetAll](#/tag/GetAll)
    - [Update](#/tag/Update)
- user
    - [ChangeRole](#/user/ChangeRole)
    - [GetTags](#/user/GetTags)
    - [Login](#/user/Login)
    - [Register](#/user/Register)

---

## post

### AddPost <a id="/post/AddPost"></a>

**路径**
- POST `/post/AddPost`

**请求**
```ts
interface ReqAddPost {
    tagId: number[],
    title: string,
    content: string
}
```

**响应**
```ts
interface ResAddPost {
    id: number
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### DelPost <a id="/post/DelPost"></a>

**路径**
- POST `/post/DelPost`

**请求**
```ts
interface ReqDelPost {
    id: number
}
```

**响应**
```ts
interface ResDelPost {
    message: string
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### GetAllPost <a id="/post/GetAllPost"></a>

**路径**
- POST `/post/GetAllPost`

**请求**
```ts
interface ReqGetAllPost {
    page: number,
    pageSize: number
}
```

**响应**
```ts
interface ResGetAllPost {
    posts: {
        id: number,
        title: string,
        content: string,
        pubished: boolean,
        authorId: string,
        createTime: /*datetime*/ string,
        updateTime?: /*datetime*/ string | null
    }[],
    count: number
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### GetPost <a id="/post/GetPost"></a>

**路径**
- POST `/post/GetPost`

**请求**
```ts
interface ReqGetPost {
    id: number
}
```

**响应**
```ts
interface ResGetPost {
    post: {
        id: number,
        title: string,
        content: string,
        pubished: boolean,
        author: {
            id: number,
            uid: string,
            nickName: string,
            username: string,
            password: string,
            roles: string[],
            createTime: /*datetime*/ string,
            updateTime?: /*datetime*/ string | null
        },
        authorId: string,
        createTime: /*datetime*/ string,
        updateTime?: /*datetime*/ string | null,
        tags: {
            postId: number,
            tagId: number
        }[]
    }
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### UpdatePost <a id="/post/UpdatePost"></a>

**路径**
- POST `/post/UpdatePost`

**请求**
```ts
interface ReqUpdatePost {
    id: number,
    tagId?: number[],
    createTime?: /*datetime*/ string,
    updateTime?: /*datetime*/ string | null,
    authorId?: string
}
```

**响应**
```ts
interface ResUpdatePost {
    message: string
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

## tag

### Add <a id="/tag/Add"></a>

**路径**
- POST `/tag/Add`

**请求**
```ts
interface ReqAdd {
    name: string
}
```

**响应**
```ts
interface ResAdd {
    id: number
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### GetAll <a id="/tag/GetAll"></a>

**路径**
- POST `/tag/GetAll`

**请求**
```ts
interface ReqGetAll {

}
```

**响应**
```ts
interface ResGetAll {
    tags: {
        id: number,
        name: string,
        userId: string,
        createTime: /*datetime*/ string
    }[]
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### Update <a id="/tag/Update"></a>

**路径**
- POST `/tag/Update`

**请求**
```ts
interface ReqUpdate {
    id: number,
    name?: string,
    userId?: string,
    createTime?: /*datetime*/ string
}
```

**响应**
```ts
interface ResUpdate {
    message: string
}
```

---

## user

### ChangeRole <a id="/user/ChangeRole"></a>

**路径**
- POST `/user/ChangeRole`

**请求**
```ts
interface ReqChangeRole {
    uid: string,
    roles: string[]
}
```

**响应**
```ts
interface ResChangeRole {
    message: string
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### GetTags <a id="/user/GetTags"></a>

**路径**
- POST `/user/GetTags`

**请求**
```ts
interface ReqGetTags {

}
```

**响应**
```ts
interface ResGetTags {
    tags: {
        id: number,
        name: string,
        userId: string,
        createTime: /*datetime*/ string
    }[]
}
```

**配置**
```ts
{
  "auths": {
    "roles": []
  }
}
```

---

### Login <a id="/user/Login"></a>

**路径**
- POST `/user/Login`

**请求**
```ts
interface ReqLogin {
    username: string,
    password: string
}
```

**响应**
```ts
interface ResLogin {
    token: string
}
```

---

### Register <a id="/user/Register"></a>

**路径**
- POST `/user/Register`

**请求**
```ts
interface ReqRegister {
    username: string,
    password: string
}
```

**响应**
```ts
interface ResRegister {
    _token: string
}
```

