import { Box } from "theme-ui";
import { CustomThemeType } from "../../utils/theme";
import BannerPair from "../molecules/BannerPair";
import StickyNavBar from "../molecules/StickyNavBar";

interface TopScreenProps {
  githubLink: string;
}

export default function TopScreen({ githubLink }: TopScreenProps): JSX.Element {
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

      <StickyNavBar githubLink={githubLink} />
      <Box
        sx={{
          height: (theme: CustomThemeType) =>
            `calc(20vh - ${theme.lineHeights.nav})`,
        }}
      />
    </>
  );
}
