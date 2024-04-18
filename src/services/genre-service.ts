import apiClient from "./api-client";

interface ApiResponse {
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

class GenreService {
  controller = new AbortController();

  getGenres() {
    return apiClient.get<ApiResponse>(
      "/genres?key=" + import.meta.env.VITE_RAWG_API_KEY,
      {
        signal: this.controller.signal,
      }
    );
  }
}

export default new GenreService();
