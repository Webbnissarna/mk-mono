import {
  ResponsiveImageType,
  StructuredTextGraphQlResponse,
} from "react-datocms";

import { Video, StructuredTextBlock } from "../utils/fetchData";

interface _Game {
  title: string;
  slug: string;
  releaseDate: string;
  thumbnail: {
    responsiveImage: ResponsiveImageType;
  };
  tags: string[];
  order: number;
  description: string;
  promoVideo: Video;
  screenshots: { responsiveImage: ResponsiveImageType }[];
  content: StructuredTextGraphQlResponse<StructuredTextBlock>;
}

export type Game = Partial<_Game>;
