import { Box, Flex } from "theme-ui";
import { Game } from "../../types/Game";
import { Me } from "../../types/Me";
import { WebApp } from "../../types/WebApp";
import Section from "../molecules/Section";
import AboutMeDisplay from "./AboutMeDisplay";
import GamesDisplay from "./GamesDisplay";
import WebAppsDisplay from "./WebAppsDisplay";

interface ContentContainerProps {
  games: Game[];
  webApps: WebApp[];
  me: Me;
}

export default function ContentContainer({
  games,
  webApps,
  me,
}: ContentContainerProps): JSX.Element {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          maxWidth: "850px",
          gap: 5,
        }}
      >
        <Section id="games" title="Games">
          <GamesDisplay games={games} />
        </Section>

        <Section id="webapps" title="Web Apps">
          <WebAppsDisplay webApps={webApps} />
        </Section>

        <Section id="me" title="Me">
          <AboutMeDisplay me={me} />
        </Section>

        <Box sx={{ height: 50 }} />
      </Flex>
    </Flex>
  );
}
