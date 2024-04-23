import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import { Game } from "../services/game-service";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiMetacritic, SiNintendoswitch } from "react-icons/si";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    android: <FaAndroid />,
    mac: <FaApple />,
    linux: <FaLinux />,
    nintendo: <SiNintendoswitch />,
  };

  const metacriticColor =
    game.metacritic > 90
      ? "success"
      : game.metacritic > 80
      ? "warning"
      : "error";

  return (
    <Card>
      <CardMedia component="img" height="260" image={game.background_image} />
      <CardContent sx={{ height: "100%" }}>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={1}
            sx={{ opacity: 0.3 }}
          >
            {game.parent_platforms.map(({ platform }) => {
              return iconMap[platform.slug];
            })}
          </Stack>
          <Chip
            label={game.metacritic}
            color={metacriticColor}
            size="small"
            variant="outlined"
          ></Chip>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GameCard;
