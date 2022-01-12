import { gql } from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Paragraph } from "theme-ui";
import { Game } from "../../types/Game";
import fetchData, { responsiveImageFragment } from "../../utils/fetchData";
import { ParsedUrlQuery } from "querystring";
import Background from "../../components/organisms/Background";
import { SiteMetainfo } from "../../types/SiteMetainfo";
import VideoPlayer from "../../components/atoms/VideoPlayer";
import StructuredTextRenderer from "../../components/atoms/StructuredTextRenderer";
import FancyButtonList from "../../components/molecules/FancyButtonList";
import { IconButtonProps } from "../../components/molecules/IconButton";

interface GamePageProps {
  game: Game;
  siteMetainfo: SiteMetainfo;
}

export default function GamePage({
  game,
  siteMetainfo,
}: GamePageProps): JSX.Element {
  const linkButtons = game.links?.map<IconButtonProps>((link) => ({
    type: link.type,
    onClick: () => window?.open(link.url),
  }));

  console.log("linkButtons", linkButtons);

  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Background image={siteMetainfo.background.responsiveImage} />
      <Flex
        sx={{
          width: "100%",
          padding: 4,
          justifyContent: "center",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "850px",
            marginY: 4,
            gap: 4,
          }}
        >
          <Flex
            sx={{
              width: "100%",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "body",
              color: "dark",
              boxShadow: "box",
              borderRadius: 1,
              padding: 4,
              textAlign: "center",
            }}
          >
            <Heading
              as={"h1"}
              sx={{
                fontSize: "title",
                fontFamily: "heading",
                fontWeight: "title",
              }}
            >
              {game.title}
            </Heading>
            <Paragraph>{game.description}</Paragraph>
          </Flex>
          {game.promoVideo && <VideoPlayer video={game.promoVideo} />}
          {linkButtons && <FancyButtonList buttons={linkButtons} />}
          <Box
            sx={{
              color: "dark",
              backgroundColor: "body",
              paddingX: 4,
              paddingY: 2,
              borderRadius: 1,
              fontFamily: "body",
              fontSize: "body",
              fontWeight: "body",
              textAlign: "center",
              boxShadow: "box",
            }}
          >
            <StructuredTextRenderer data={game.content} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const pathsQuery = gql`
  query MyQuery {
    allGames {
      slug
    }
  }
`;

function makePropsQuery(slug: string) {
  return gql`
  query MyQuery {
    siteMetainfo {
      background {
        responsiveImage(imgixParams: { auto: format }) {
          ...responsiveImageFragment
        }
      }
    }
    game(filter: {slug: {eq: "${slug}"}}) {
      title
      description
      slug
      releaseDate
      tags
      links
      promoVideo {
        provider
        title
        url
        height
        providerUid
        thumbnailUrl
        width
      }
      content {
        value
        blocks {
          image {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          id
        }
      }
      screenshots {
        responsiveImage {
          ...responsiveImageFragment
        }
      }
    }
  }
  
  ${responsiveImageFragment}
`;
}

interface PathsQueryReturn {
  allGames: Pick<Game, "slug">[];
}

interface StaticParams extends ParsedUrlQuery {
  id: string;
}

interface StaticParamsWrapper {
  params: StaticParams;
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const data = await fetchData<PathsQueryReturn>({
    query: pathsQuery,
  });

  const paths = data.allGames.map<StaticParamsWrapper>((game) => ({
    params: {
      id: game.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  GamePageProps,
  StaticParams
> = async ({ params }) => {
  const query = makePropsQuery(params.id);
  const data = await fetchData<GamePageProps>({ query });
  return {
    props: data,
  };
};
