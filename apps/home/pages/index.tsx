import { gql } from "graphql-request";
import { Box } from "theme-ui";
import ContentContainer from "../components/organisms/ContentContainer";
import TopScreen from "../components/organisms/TopScreen";
import { Game } from "../types/Game";
import { WebApp } from "../types/WebApp";
import fetchData, {
  GQLQueryResponse,
  responsiveImageFragment,
} from "../utils/fetchData";

interface PageData {
  allGames: Game[];
  allWebApps: WebApp[];
}

type PageProps = GQLQueryResponse<PageData>;

export default function Index({ data }: PageProps) {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <TopScreen />
      <ContentContainer games={data.allGames} webApps={data.allWebApps} />
    </Box>
  );
}

const query = gql`
  query MyQuery {
    allGames(orderBy: order_ASC) {
      title
      tags
      thumbnail {
        responsiveImage(
          imgixParams: { fit: crop, w: "400", h: "240", auto: format }
        ) {
          ...responsiveImageFragment
        }
      }
    }

    allWebApps(orderBy: title_ASC) {
      title
      abbreviation
      description
      color {
        hex
      }
    }
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const data = await fetchData<PageData>({
    query,
  });
  return {
    props: { data },
  };
}
