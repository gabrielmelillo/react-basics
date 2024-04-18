import apiClient from "./api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  added: number;
  platforms: [];
}

interface ApiResponse {
  count: number;
  results: Game[];
}

export interface Platform {}

class GameService {
  getGames() {
    return apiClient.get<ApiResponse>("/games");
  }
}

export default new GameService();
