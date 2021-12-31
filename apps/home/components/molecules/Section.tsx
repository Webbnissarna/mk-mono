import { ReactNode } from "react";
import { Box, Flex } from "theme-ui";
import SectionTitle from "../atoms/SectionTitle";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode | ReactNode[];
}

export default function Section({
  id,
  title,
  children,
}: SectionProps): JSX.Element {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <SectionTitle id={id}>{title}</SectionTitle>
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Flex>
  );
}
