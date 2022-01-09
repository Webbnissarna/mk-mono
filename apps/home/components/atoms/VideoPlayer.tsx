import { Box } from "theme-ui";
import { Video } from "../../utils/fetchData";
import ReactPlayer from "react-player/youtube";

interface VideoPlayerProps {
  video: Video;
}

export default function VideoPlayer({ video }: VideoPlayerProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "inline",
        boxShadow: "box",
      }}
    >
      <ReactPlayer url={video.url} controls={true} />
    </Box>
  );
}
