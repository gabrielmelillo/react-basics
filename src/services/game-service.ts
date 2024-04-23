import apiClient from "./api-client";

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
  getGames() {
    return apiClient.get<ApiResponse>("/games");
  }
}

export default new GameService();
