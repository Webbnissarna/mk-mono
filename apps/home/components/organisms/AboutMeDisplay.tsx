import { Image, StructuredText } from "react-datocms";
import { Box, Flex } from "theme-ui";
import { Me } from "../../types/Me";

interface AboutMeDisplayProps {
  me: Me;
}

export default function AboutMeDisplay({
  me,
}: AboutMeDisplayProps): JSX.Element {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: 280,
          height: 280,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "box",
        }}
      >
        <Image data={me.image.responsiveImage} />
      </Box>
      <Box
        sx={{
          color: "body",
          backgroundColor: "card",
          paddingX: 4,
          paddingY: 2,
          borderRadius: 1,
          fontFamily: "body",
          fontSize: "body",
          fontWeight: "body",
        }}
      >
        <StructuredText data={me.content} />
      </Box>
    </Flex>
  );
}
