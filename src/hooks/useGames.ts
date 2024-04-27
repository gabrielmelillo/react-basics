import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";

const useGames = (selectedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    gameService
      .getGames(selectedGenre)
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre]);

  return { games, setGames, isLoading };
};

export default useGames;
