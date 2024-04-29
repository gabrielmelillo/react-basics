import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";
import { GameQuery } from "../App";

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    gameService
      .getGames(gameQuery)
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [gameQuery]);

  return { games, setGames, isLoading };
};

export default useGames;
