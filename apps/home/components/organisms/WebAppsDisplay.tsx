import { Flex } from "theme-ui";
import { WebApp } from "../../types/WebApp";
import WebAppCard from "../molecules/WebAppCard";

interface WebAppsDisplayProps {
  webApps: WebApp[];
}

export default function WebAppsDisplay({
  webApps,
}: WebAppsDisplayProps): JSX.Element {
  return (
    <Flex
      sx={{
        gap: 5,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {webApps.map((webApp) => (
        <WebAppCard key={webApp.title} webApp={webApp} />
      ))}
    </Flex>
  );
}
