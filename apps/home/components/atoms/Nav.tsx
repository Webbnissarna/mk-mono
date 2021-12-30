import { ThemeUIStyleObject, Flex, NavLink } from "theme-ui";

const navLinkStyle: ThemeUIStyleObject = {
  color: "body",
  fontFamily: "body",
  fontWeight: "stylish",
  fontSize: "medium",
  textShadow: "link",
  lineHeight: "nav",
  px: 4,
  borderRadius: 1,
  transition: "background-color 0.1s ease-out",

  "&:hover": {
    backgroundColor: "lightHover",
  },
};

export default function Nav(): JSX.Element {
  return (
    <Flex as="nav">
      <NavLink sx={navLinkStyle} href="#games">
        Games
      </NavLink>
      <NavLink sx={navLinkStyle} href="#webapps">
        Web Apps
      </NavLink>
      <NavLink sx={navLinkStyle} href="#art">
        Art
      </NavLink>
      <NavLink sx={navLinkStyle} href="#skilltree">
        Skill Tree
      </NavLink>
      <NavLink sx={navLinkStyle} href="#me">
        Me
      </NavLink>
    </Flex>
  );
}
