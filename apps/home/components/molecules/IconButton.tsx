import { Button, Text } from "@theme-ui/components";
import { MouseEventHandler } from "react";
import Icon, { iconMap, IconType } from "../atoms/Icon";

export interface IconButtonProps {
  type: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({
  type,
  onClick,
}: IconButtonProps): JSX.Element {
  const icon = iconMap[type];

  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        width: "200px",
        height: "40px",
        borderRadius: 3,
        backgroundColor: icon.backdropColor,
        boxShadow: "box",
        cursor: "pointer",
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        userSelect: "none",

        "&:hover": {
          transform: "scale(1.05)",
        },

        "&:active": {
          transform: "scale(1)",
          opacity: 0.9,
        },
      }}
    >
      <Icon type={type} size={24} />
      {icon.actionTitle && (
        <Text
          sx={{
            fontFamily: "body",
            fontSize: "button",
            fontWeight: "title",
            color: icon.actionTextColor,
          }}
        >
          {icon.actionTitle}
        </Text>
      )}
    </Button>
  );
}
