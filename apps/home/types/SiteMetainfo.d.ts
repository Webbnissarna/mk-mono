import { ResponsiveImageType } from "react-datocms";

interface _SiteMetainfo {
  githubLink: string;
  background: {
    responsiveImage: ResponsiveImageType;
  };
}

export type SiteMetainfo = Partial<_SiteMetainfo>;
