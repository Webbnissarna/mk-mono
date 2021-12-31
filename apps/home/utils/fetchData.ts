import { gql, GraphQLClient } from "graphql-request";

export interface FetchOptions {
  query: string;
  variables?: Record<string, unknown>;
  preview?: boolean;
}

export default async function fetchData<T>({
  query,
  variables,
  preview,
}: FetchOptions): Promise<T> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  return client.request<T>(query, variables);
}

export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    title
    alt
    bgColor
    base64
  }
`;
