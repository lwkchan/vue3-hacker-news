export interface Article {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url?: string;
}

export enum ArticlesPageType {
    Top = 'topstories',
    New = 'newstories'
}