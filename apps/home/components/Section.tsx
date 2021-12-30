import { ReactNode } from "react";
import { Box, Flex } from "theme-ui";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export default function Section({
  title,
  children,
}: SectionProps): JSX.Element {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SectionTitle>{title}</SectionTitle>
      <Box>{children}</Box>
    </Flex>
  );
}
