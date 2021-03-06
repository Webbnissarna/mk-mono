import { gql, GraphQLClient } from "graphql-request";
import {
  ResponsiveImageType,
  StructuredTextGraphQlResponseRecord,
} from "react-datocms";

export interface Video {
  provider: string;
  providerUid: string;
  title: string;
  thumbnailUrl: string;
  url: string;
  width: number;
  height: number;
}
export interface StructuredTextBlock
  extends StructuredTextGraphQlResponseRecord {
  image?: {
    responsiveImage: ResponsiveImageType;
  };
}

export interface GQLQueryResponse<T> {
  data: T;
}

export interface FetchOptions {
  query: string;
  variables?: Record<string, unknown>;
}

export default async function fetchData<T>({
  query,
  variables,
}: FetchOptions): Promise<T> {
  const preview = !!process.env.DATOCMS_USE_PREVIEW;

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
