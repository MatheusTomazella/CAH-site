import { CardType } from "./Card.type";
import { DatabaseIndex } from "./Data.type";

export type Suggestion = {
    id:DatabaseIndex,
    type:CardType,
    text:string
};