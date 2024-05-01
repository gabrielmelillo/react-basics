import { GameQuery } from "../App";
import apiClient from "./api-client";
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
  getGames(gameQuery: GameQuery) {
    return apiClient.get<ApiResponse>("/games", {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort?.id,
        search: gameQuery.search,
      },
    });
  }
}

export default new GameService();
