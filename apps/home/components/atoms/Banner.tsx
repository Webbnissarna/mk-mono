import { Text } from "theme-ui";

interface BannerProps {
  left?: boolean;
  right?: boolean;
  text: string;
}

export default function Banner({ right, text }: BannerProps): JSX.Element {
  return (
    <div>
      <Text
        className={right ? "right" : "left"}
        sx={{
          position: "relative",
          fontSize: "heading",
          fontFamily: "heading",
          fontWeight: "heading",

          ":before": {
            content: "''",
            backgroundColor: "banner",
            borderRadius: 2,
            position: "absolute",
            top: 0,
            zIndex: -1,
            height: "100%",
            width: "200vw",
            boxShadow: "heading",
          },

          "&.left:before": {
            right: "-0.5em",
            transform: "skew(45deg)",
          },
          "&.right:before": {
            left: "-0.5em",
            transform: "skew(-45deg)",
          },
        }}
      >
        {text}
      </Text>
    </div>
  );
}
