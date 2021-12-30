import { Box } from "theme-ui";
import BannerPair from "../components/BannerPair";

export default function Index() {
  return (
    <Box sx={{ overflowX: "hidden", width: "100vw", minHeight: "100vh" }}>
      <BannerPair />
    </Box>
  );
}
