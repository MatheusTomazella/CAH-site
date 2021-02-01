import { DatabaseIndex } from "./Data.type";

export type UserConstructor = {
    id:DatabaseIndex,
    name:string,
    socket_id:string
}

export interface UserData extends UserConstructor {
    id:DatabaseIndex
}