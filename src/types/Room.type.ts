import { Card } from "./Card.type";
import { DatabaseIndex } from "./Data.type";

export type RoomProps = {
    id:DatabaseIndex,
    name:string,
    config:RoomConfig,
    state:RoomState
}

export type RoomConfig = {
    hand_count:number,
    max_players:number
}
export type RoomState = {
    player_count:number,
    players:DatabaseIndex[],
    current_black?:Card,
    black_stack:Card[],
    white_used:Card[]
}