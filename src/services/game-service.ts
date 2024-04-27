import apiClient from "./api-client";
import { Genre } from "./genre-service";
import { Platform } from "./platform-service";

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
  getGames(genre: Genre | null, platform: Platform | null) {
    return apiClient.get<ApiResponse>("/games", {
      params: { genres: genre?.id, parent_platforms: platform?.id },
    });
  }
}

export default new GameService();
