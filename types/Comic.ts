import { Creator } from "./Creators";

export type Comic = {
    id: number;
    issueNumber: number;
    title: string;
    thumbnail: string;
    publishedDate: Date;
    creators?: Creator[];
}