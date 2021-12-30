import { Box } from "theme-ui";
import Banner from "./Banner";

export default function BannerPair(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gridGap: 3,
        transform: "rotate(20deg)",
      }}
    >
      <Banner text="MASTER" />
      <Banner text="KENTH" right />
    </Box>
  );
}
