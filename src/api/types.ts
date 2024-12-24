type GenreId =
  | 28
  | 12
  | 16
  | 35
  | 80
  | 99
  | 18
  | 10751
  | 14
  | 36
  | 27
  | 10402
  | 9648
  | 10749
  | 878
  | 10770
  | 53
  | 10752
  | 37
  | 10759
  | 10762
  | 10763
  | 10764
  | 10765
  | 10766
  | 10767;
export type Genre = {
  id: GenreId;
  name: string;
};

export interface IMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenreId[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
