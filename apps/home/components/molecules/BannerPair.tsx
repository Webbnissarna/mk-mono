import { Box } from "theme-ui";
import Banner from "../atoms/Banner";

export default function BannerPair(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        transform: "rotate(20deg)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          right: "5vw",
        }}
      >
        <Banner text="MASTER" />
      </Box>
      <Box
        sx={{
          position: "relative",
          left: "5vw",
        }}
      >
        <Banner text="KENTH" right />
      </Box>
    </Box>
  );
}
