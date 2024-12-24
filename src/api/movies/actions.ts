import { api } from "@/api/api";
import { IMovieResponse } from "@/api/types";

export const getSoonMovies = async () => {
  const response = await api.get<IMovieResponse>("/movie/upcoming");
  return response.data;
};
