import { Flex, Box, Text } from "theme-ui";
import { WebApp } from "../../types/WebApp";

interface WebAppCardProps {
  webApp: WebApp;
}

export default function WebAppCard({ webApp }: WebAppCardProps): JSX.Element {
  return (
    <Flex
      sx={{
        width: 180,
        height: 180,
        backgroundColor: webApp.color.hex,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "box",
        borderRadius: 1,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Text
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "body",
          fontWeight: "title",
          fontSize: "title",
        }}
      >
        {webApp.abbreviation}
      </Text>
      <Text
        sx={{
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontFamily: "body",
          fontWeight: "title",
          fontSize: "medium",
          color: "body",
          backgroundColor: "card",
        }}
      >
        {webApp.title}
      </Text>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "card",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          opacity: 0,
          transition: "opacity 0.2s ease-out",

          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Text
          sx={{
            color: "body",
            fontFamily: "body",
            fontSize: "body",
            textAlign: "center",
            padding: 2,
          }}
        >
          {webApp.description}
        </Text>
      </Box>
    </Flex>
  );
}
