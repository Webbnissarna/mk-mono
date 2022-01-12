import { Flex } from "@theme-ui/components";
import IconButton, { IconButtonProps } from "../molecules/IconButton";

interface FancyButtonListProps {
  buttons: IconButtonProps[];
}

export default function FancyButtonList({
  buttons,
}: FancyButtonListProps): JSX.Element {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        width: "100%",
        gap: 4,
      }}
    >
      {buttons.map((button) => (
        <IconButton
          key={button.type}
          type={button.type}
          onClick={button.onClick}
        />
      ))}
    </Flex>
  );
}
