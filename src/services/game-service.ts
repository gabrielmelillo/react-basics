import apiClient from "./api-client";
import { Genre } from "./genre-service";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  added: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface ApiResponse {
  count: number;
  results: Game[];
}

class GameService {
  getGames(genre: Genre | null) {
    return apiClient.get<ApiResponse>("/games", {
      params: { genres: genre?.id },
    });
  }
}

export default new GameService();
