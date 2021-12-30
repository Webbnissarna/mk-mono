import { Flex } from "theme-ui";
import Nav from "./Nav";

export default function StickyNavBar(): JSX.Element {
  return (
    <Flex
      sx={{
        position: "sticky",
        top: 2,
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Nav />
    </Flex>
  );
}
