import { Url } from "url";

export interface MovieItem {
    id: number,
      original_language: string,
      overview: string,
      popularity: number,
      poster_path: Url,
      release_date: Date,
      title: string,
      vote_average: number,
      vote_count: number
}
