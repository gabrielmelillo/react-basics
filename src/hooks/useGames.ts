import { useEffect, useState } from "react";
import gameService, { Game } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    gameService
      .getGames()
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { games, setGames };
};

export default useGames;
