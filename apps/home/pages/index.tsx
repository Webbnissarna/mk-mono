import { Box } from "theme-ui";
import ContentContainer from "../components/organisms/ContentContainer";
import TopScreen from "../components/organisms/TopScreen";

export default function Index() {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <TopScreen />
      <ContentContainer />
    </Box>
  );
}
