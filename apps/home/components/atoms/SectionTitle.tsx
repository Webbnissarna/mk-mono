import React, { ReactNode } from "react";
import { Box, Text } from "theme-ui";

interface SectionTitleProps {
  id: string;
  children: ReactNode | ReactNode[];
}

export default function SectionTitle({
  id,
  children,
}: SectionTitleProps): JSX.Element {
  return (
    <Box sx={{ position: "relative" }}>
      <Text
        id={id}
        sx={{
          position: "absolute",
          fontSize: "title",
          top: "-1em",
          visibility: "collapse",
        }}
      />
      <Text
        as="h1"
        sx={{
          color: "body",
          fontFamily: "body",
          fontWeight: "title",
          fontSize: "title",
          textShadow: "title",
        }}
      >
        {children}
      </Text>
    </Box>
  );
}
