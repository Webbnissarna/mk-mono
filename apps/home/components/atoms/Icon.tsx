import githubIcon from "../../images/github-icon.svg";
import steamIcon from "../../images/steam-icon.svg";
import epicGamesIcon from "../../images/epic-games-icon.svg";
import googleDriveIcon from "../../images/google-drive-icon.svg";
import Image from "next/image";
import { Box } from "@theme-ui/components";

export type IconType = "github" | "googleDrive" | "steam" | "epicGames";

export interface IconData {
  icon: StaticImageData;
  title: string;
  backdropColor: string;
  actionTitle?: string;
  actionTextColor?: string;
  alt: string;
}

export const iconMap: Record<IconType, IconData> = {
  github: {
    icon: githubIcon,
    title: "GitHub",
    actionTitle: "GitHub",
    actionTextColor: "dark",
    backdropColor: "white",
    alt: "Negative space silhouette depicting a cat with an octopus tentacle as arm.",
  },
  steam: {
    icon: steamIcon,
    title: "Steam",
    backdropColor: "#303030",
    alt: "Black locomotive crank on a white circle.",
  },
  epicGames: {
    icon: epicGamesIcon,
    title: "Epic Games Store",
    actionTitle: "Epic Games Store",
    actionTextColor: "dark",
    backdropColor: "white",
    alt: "Pin-like card shape with text saying Epic Games.",
  },
  googleDrive: {
    icon: googleDriveIcon,
    title: "Google Drive",
    actionTitle: "Download",
    actionTextColor: "light",
    backdropColor: "#1a73e8",
    alt: "Triangular shape with sides made of ribbon in colors of green, yellow, and blue respectively.",
  },
};

interface IconProps {
  type: IconType;
  size: number;
}

export default function Icon({ type, size }: IconProps): JSX.Element {
  const iconData = iconMap[type];

  if (iconData) {
    const aspectRatio = iconData.icon.width / iconData.icon.height;
    return (
      <Image
        src={iconData.icon}
        title={iconData.title}
        alt={iconData.alt}
        width={size * aspectRatio}
        height={size}
      />
    );
  }

  return (
    <Box
      sx={{
        width: size,
        height: size,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
      }}
    />
  );
}
