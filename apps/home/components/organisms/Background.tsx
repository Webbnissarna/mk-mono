import { Image, ResponsiveImageType } from "react-datocms";
import { Box } from "theme-ui";

interface BackgroundProps {
  image: ResponsiveImageType;
}

export default function Background({ image }: BackgroundProps): JSX.Element {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "red",
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        data={image}
        style={{
          height: "100%",
          width: "100%",
        }}
        pictureStyle={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
