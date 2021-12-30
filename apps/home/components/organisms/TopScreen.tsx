import { Box } from "theme-ui";
import { CustomThemeType } from "../../utils/theme";
import BannerPair from "../molecules/BannerPair";
import StickyNavBar from "../molecules/StickyNavBar";

export default function TopScreen(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20vh",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BannerPair />
        </Box>
      </Box>

      <StickyNavBar />
      <Box
        sx={{
          height: (theme: CustomThemeType) =>
            `calc(20vh - ${theme.lineHeights.nav})`,
        }}
      />
    </>
  );
}
