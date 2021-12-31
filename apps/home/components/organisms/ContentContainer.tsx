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
        <Section title="Games">
          <GamesDisplay games={games} />
        </Section>

        <Section title="Web Apps">
          <WebAppsDisplay webApps={webApps} />
        </Section>

        <Section title="Art">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
            sem tellus, ac fringilla lectus feugiat eu. Maecenas nec congue
            nulla. Praesent porta, urna vel pharetra vestibulum, ligula sapien
            efficitur lorem, id tempus nisl dolor nec elit. Sed eleifend mi et
            sapien congue maximus. Sed non volutpat sapien. Suspendisse interdum
            nunc ac libero porta, a mollis quam interdum. Praesent a interdum
            libero. Ut iaculis orci libero, in vehicula velit blandit in. Duis
            sit amet mi vitae diam sollicitudin porta et sed mauris. Vestibulum
            placerat blandit felis a ultricies. Pellentesque non leo at nisl
            scelerisque tristique. Etiam interdum commodo metus ac pharetra.
          </p>
          <p>
            Integer hendrerit metus at purus condimentum accumsan. Nam sed
            dictum elit, molestie ornare mauris. In elementum neque non justo
            blandit, at elementum ipsum efficitur. Mauris luctus scelerisque
            diam sed aliquet. Praesent consequat, nunc sit amet varius mollis,
            eros urna ullamcorper nisi, at convallis elit risus nec arcu. In hac
            habitasse platea dictumst. Aenean gravida eros nec tincidunt
            faucibus. Integer sit amet ante elementum, consequat ex eu,
            consequat ante. Sed interdum purus tortor, ut commodo magna pharetra
            vitae. In at justo semper elit faucibus commodo non vitae sapien.
          </p>
        </Section>

        <Section title="Skill Tree">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
            sem tellus, ac fringilla lectus feugiat eu. Maecenas nec congue
            nulla. Praesent porta, urna vel pharetra vestibulum, ligula sapien
            efficitur lorem, id tempus nisl dolor nec elit. Sed eleifend mi et
            sapien congue maximus. Sed non volutpat sapien. Suspendisse interdum
            nunc ac libero porta, a mollis quam interdum. Praesent a interdum
            libero. Ut iaculis orci libero, in vehicula velit blandit in. Duis
            sit amet mi vitae diam sollicitudin porta et sed mauris. Vestibulum
            placerat blandit felis a ultricies. Pellentesque non leo at nisl
            scelerisque tristique. Etiam interdum commodo metus ac pharetra.
          </p>
          <p>
            Integer hendrerit metus at purus condimentum accumsan. Nam sed
            dictum elit, molestie ornare mauris. In elementum neque non justo
            blandit, at elementum ipsum efficitur. Mauris luctus scelerisque
            diam sed aliquet. Praesent consequat, nunc sit amet varius mollis,
            eros urna ullamcorper nisi, at convallis elit risus nec arcu. In hac
            habitasse platea dictumst. Aenean gravida eros nec tincidunt
            faucibus. Integer sit amet ante elementum, consequat ex eu,
            consequat ante. Sed interdum purus tortor, ut commodo magna pharetra
            vitae. In at justo semper elit faucibus commodo non vitae sapien.
          </p>
        </Section>

        <Section title="Me">
          <AboutMeDisplay me={me} />
        </Section>

        <Box sx={{ height: 50 }} />
      </Flex>
    </Flex>
  );
}
