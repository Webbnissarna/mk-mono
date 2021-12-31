import { gql } from "graphql-request";
import { Box } from "theme-ui";
import ContentContainer from "../components/organisms/ContentContainer";
import TopScreen from "../components/organisms/TopScreen";
import { Game, GQLQueryResponse } from "../types/Game";
import fetchData, { responsiveImageFragment } from "../utils/fetchData";

interface PageData {
  allGames: Game[];
}

type PageProps = GQLQueryResponse<PageData>;

export default function Index({ data }: PageProps) {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <TopScreen />
      <ContentContainer games={data.allGames} />
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
