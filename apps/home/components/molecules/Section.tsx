import { ReactNode } from "react";
import { Box, Flex } from "theme-ui";
import SectionTitle from "../atoms/SectionTitle";

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
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Flex>
  );
}
