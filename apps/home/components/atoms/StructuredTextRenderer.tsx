import { ReactElement } from "react";
import {
  Image,
  StructuredText,
  StructuredTextGraphQlResponse,
} from "react-datocms";
import { StructuredTextBlock } from "../../utils/fetchData";

interface StructuredTextRendererProps {
  data: StructuredTextGraphQlResponse<StructuredTextBlock>;
}

function renderBlock({
  record,
}: {
  record: StructuredTextBlock;
}): ReactElement | null {
  if (record.image) {
    return <Image data={record.image.responsiveImage} />;
  }

  return null;
}

export default function StructuredTextRenderer({
  data,
}: StructuredTextRendererProps): JSX.Element {
  return <StructuredText data={data} renderBlock={renderBlock} />;
}
