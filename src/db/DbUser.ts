import { Overwrite } from "tsrpc";
import { ObjectId } from "mongodb";
import { User } from "../shared/models/User";

export type DbUser = Overwrite<
  User,
  {
    _id: ObjectId;
  }
>;
