import React, { ReactNode } from "react";
import { Text } from "theme-ui";

interface SectionTitleProps {
  children: ReactNode | ReactNode[];
}

export default function SectionTitle({
  children,
}: SectionTitleProps): JSX.Element {
  return (
    <Text
      as="h1"
      sx={{
        color: "body",
        fontFamily: "body",
        fontWeight: "title",
        fontSize: "title",
      }}
    >
      {children}
    </Text>
  );
}
