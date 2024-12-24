import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryMovieIds } from "@/api/movies/constants";
import { getSoonMovies } from "@/api/movies/actions";
import { IMovieResponse } from "@/api/types";

export const useSoonMoviesQuery = (): UseQueryResult<IMovieResponse> => {
  return useQuery({
    queryKey: [queryMovieIds.GET_SOON],
    queryFn: getSoonMovies,
  });
};
