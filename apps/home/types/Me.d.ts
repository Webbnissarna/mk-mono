import {
  ResponsiveImageType,
  StructuredTextGraphQlResponse,
} from "react-datocms";

interface _Me {
  content: StructuredTextGraphQlResponse;
  image: {
    responsiveImage: ResponsiveImageType;
  };
}

export type Me = Partial<_Me>;
