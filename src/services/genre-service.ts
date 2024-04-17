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
      "/genres?key=3ca09dd1fce9407d9c118835a8307653",
      {
        signal: this.controller.signal,
      }
    );
  }
}

export default new GenreService();
