import { Flex } from "theme-ui";
import { Game } from "../../types/Game";
import GameCard from "../molecules/GameCard";

interface GamesDisplayProps {
  games: Game[];
}

export default function GamesDisplay({
  games,
}: GamesDisplayProps): JSX.Element {
  return (
    <Flex
      sx={{
        gap: 4,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {games.map((game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </Flex>
  );
}
