import { useEffect, useRef, useState } from "react";
import { Flex } from "theme-ui";
import { CustomThemeType } from "../utils/theme";
import Nav from "./Nav";

export default function StickyNavBar(): JSX.Element {
  const [isStuck, setIsStuck] = useState(false);
  const stickyRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = stickyRoot.current;

    const observer = new IntersectionObserver(
      ([e]) => setIsStuck(e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [stickyRoot]);

  return (
    <Flex
      ref={stickyRoot}
      sx={{
        position: "sticky",
        top: "-1px",
        paddingTop: (theme: CustomThemeType) =>
          `calc(${theme.space[2]}px + 1px)`,
        paddingBottom: 2,
        justifyContent: "center",
        zIndex: 1,

        transition: "background-color 0.1s ease-out",
        backgroundColor: isStuck ? "rgba(0, 0, 0, 0.9)" : "transparent",
      }}
    >
      <Nav />
    </Flex>
  );
}
