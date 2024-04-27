import { Grid, Skeleton } from "@mui/material";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import { Genre } from "../services/genre-service";
import { Platform } from "../services/platform-service";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { games, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [];
  for (let i = 0; i < 12; i++) skeletons[i] = i;

  return (
    <Grid container spacing={2}>
      {isLoading
        ? skeletons.map((i) => (
            <Grid key={i} item xs={4}>
              <Skeleton height={350} variant="rectangular" />
            </Grid>
          ))
        : games.map((game) => (
            <Grid item xs={4} key={game.id}>
              <GameCard game={game} key={game.id} />
            </Grid>
          ))}
    </Grid>
  );
}

export default GameGrid;
