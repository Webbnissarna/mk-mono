import {
  ResponsiveImageType,
  StructuredTextGraphQlResponse,
} from "react-datocms";
import { IconType } from "../components/atoms/Icon";

import { Video, StructuredTextBlock } from "../utils/fetchData";

export interface ExternalLink {
  type: IconType;
  url: string;
}

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
  links: ExternalLink[];
  content: StructuredTextGraphQlResponse<StructuredTextBlock>;
}

export type Game = Partial<_Game>;
