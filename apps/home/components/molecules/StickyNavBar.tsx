import { useEffect, useRef, useState } from "react";
import { Flex, Link } from "theme-ui";
import { CustomThemeType } from "../../utils/theme";
import Nav from "../atoms/Nav";
import Icon from "../atoms/Icon";

interface StickyNavBarProps {
  githubLink: string;
}

export default function StickyNavBar({
  githubLink,
}: StickyNavBarProps): JSX.Element {
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
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        width: "100%",
        position: "sticky",
        top: "-1px",
        zIndex: 1,
      }}
    >
      <Flex
        sx={{
          width: "100%",
          paddingBottom: 2,
          justifyContent: "center",
          paddingTop: (theme: CustomThemeType) =>
            `calc(${theme.space[2]}px + 1px)`,

          transition: "background-color 0.1s ease-out",
          backgroundColor: isStuck ? "rgba(0, 0, 0, 0.9)" : "transparent",
        }}
      >
        <Nav />
      </Flex>

      <Link
        href={githubLink}
        sx={{
          opacity: isStuck ? 0 : 0.8,
          transition: "opacity 0.1s ease-out",

          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Icon type="github" />
      </Link>
    </Flex>
  );
}
