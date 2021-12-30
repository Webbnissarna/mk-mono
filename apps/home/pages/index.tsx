import { Box, Flex } from "theme-ui";
import BannerPair from "../components/BannerPair";
import Nav from "../components/Nav";

export default function Index() {
  return (
    <Box sx={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20vh",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BannerPair />
        </Box>
        <Flex
          sx={{
            position: "absolute",
            bottom: "20vh",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Nav />
          <Box sx={{ width: "30px", height: "30px" }}></Box>
        </Flex>
      </Box>
      <Box>
        <h1 id="#games">Games</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus
          sem tellus, ac fringilla lectus feugiat eu. Maecenas nec congue nulla.
          Praesent porta, urna vel pharetra vestibulum, ligula sapien efficitur
          lorem, id tempus nisl dolor nec elit. Sed eleifend mi et sapien congue
          maximus. Sed non volutpat sapien. Suspendisse interdum nunc ac libero
          porta, a mollis quam interdum. Praesent a interdum libero. Ut iaculis
          orci libero, in vehicula velit blandit in. Duis sit amet mi vitae diam
          sollicitudin porta et sed mauris. Vestibulum placerat blandit felis a
          ultricies. Pellentesque non leo at nisl scelerisque tristique. Etiam
          interdum commodo metus ac pharetra. Integer hendrerit metus at purus
          condimentum accumsan. Nam sed dictum elit, molestie ornare mauris. In
          elementum neque non justo blandit, at elementum ipsum efficitur.
          Mauris luctus scelerisque diam sed aliquet. Praesent consequat, nunc
          sit amet varius mollis, eros urna ullamcorper nisi, at convallis elit
          risus nec arcu. In hac habitasse platea dictumst. Aenean gravida eros
          nec tincidunt faucibus. Integer sit amet ante elementum, consequat ex
          eu, consequat ante. Sed interdum purus tortor, ut commodo magna
          pharetra vitae. In at justo semper elit faucibus commodo non vitae
          sapien.
        </p>
      </Box>
    </Box>
  );
}
