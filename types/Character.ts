export type Character = {
    id: number;
    name: string;
    gender: string;
    origin: string;
    publisher: string;
    image: string;
    thumbnail: string;
}

export type CharacterResponse = {
    error: string;
    limit: number;
    offset: number;
    status_code: number;
    number_of_total_results: number
    results: CharacterDetailResponse[];
}

export type CharacterDetailResponse = {
    id: number;
    name: string;
    gender: number;
    origin: { name: string };
    publisher: { name: string };
    image: { thumb_url: string, original_url: string }

}