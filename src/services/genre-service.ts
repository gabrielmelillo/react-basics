import apiClient from "./api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

interface ApiResponse {
  results: Genre[];
}

class GenreService {
  controller = new AbortController();

  getGenres() {
    return apiClient.get<ApiResponse>("/genres");
  }
}

export default new GenreService();
