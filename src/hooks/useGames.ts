import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { Platform } from "../services/platform-service";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    gameService
      .getGames(selectedGenre, selectedPlatform)
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre, selectedPlatform]);

  return { games, setGames, isLoading };
};

export default useGames;
