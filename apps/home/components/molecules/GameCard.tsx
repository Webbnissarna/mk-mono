import { Image } from "react-datocms";
import { Box, Flex, Text } from "theme-ui";
import { Game } from "../../types/Game";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps): JSX.Element {
  return (
    <Box
      sx={{
        width: "400px",
        height: "340px",
        boxShadow: "box",
        backgroundColor: "card",
        overflow: "hidden",
        borderRadius: 1,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "240px" }}>
          <Image
            data={game.thumbnail.responsiveImage}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            as="h2"
            sx={{
              fontFamily: "body",
              fontWeight: "title",
              fontSize: "medium",
              color: "body",
              textShadow: "title",
            }}
          >
            {game.title}
          </Text>
          <Flex
            sx={{
              flexDirection: "row",
              gap: 3,
            }}
          >
            {game.tags?.map((tag) => (
              <Text
                key={tag}
                sx={{
                  fontFamily: "body",
                  fontWeight: "stylish",
                  fontSize: "small",
                  color: "#000",
                  backgroundColor: "body",
                  borderRadius: 2,
                  paddingY: 1,
                  paddingX: 2,
                }}
              >
                {tag}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Box sx={{}} />
    </Box>
  );
}
