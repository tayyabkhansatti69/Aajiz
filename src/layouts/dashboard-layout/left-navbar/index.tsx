import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import NavbarList from "./navbar-list";
import { NavListData, NavListDataAdmine, NavListDataStudent } from "./left-navbar.data";
//icons
import MenuIcon from "@mui/icons-material/Menu";
// import LogoIcon from "@/assets/icons/logo-icon";
// import mainLogo from "@/assets/mainLogo2.png";
// import Image from "next/image";
// import IconLeftNavbar from "@/assets/icons/dashboard-main/Icon-leftnavbar";
import IconLeftNavbar from "@/src/assets/icons/dashboard-main/Icon-leftnavbar";
import { getLocalStorage } from "@/src/utils";
// import { usePathname } from "next/navigation";
//=====================================================================================
// CONSTANTS

export const drawerWidth = "300px";
//============================================================
function LeftNavbar(props: any) {
  const theme: any = useTheme();
  const { open, handleDrawer,setLinkName } = props;
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));

console.log(getLocalStorage('rememberMe'),"remn")
const loginUser:any=getLocalStorage('rememberMe')
console.log(loginUser?.email,loginUser?.password ,"datata")

  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ maxHeight: "100vh" }}>
        <DrawerHeader>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconLeftNavbar sx={{
              fontSize: 200,
              height: 50
            }} />
            {screenSizeHandler && (
              <IconButton onClick={handleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </DrawerHeader>

        {/* Left NavBar List Component  */}
        <Stack flexDirection={"column"} gap={1} mt={5} pr={2}>
          {loginUser?.email==='teacher@gmail.com' && loginUser.password==='123' && NavListData.map(({ label, icon, link }, index) => (
            <NavbarList
              key={index}
              link={link}
              Icon={icon}
              label={label}
              setLinkName={setLinkName}
            />
          ))}
          {loginUser?.email==='student@gmail.com' && loginUser.password==='123' && NavListDataStudent.map(({ label, icon, link }, index) => (
            <NavbarList
              key={index}
              link={link}
              Icon={icon}
              label={label}
              setLinkName={setLinkName}
            />
          ))}
           {loginUser?.email==='admine@gmail.com' && loginUser.password==='123' && NavListDataAdmine.map(({ label, icon, link }, index) => (
            <NavbarList
              key={index}
              link={link}
              Icon={icon}
              label={label}
              setLinkName={setLinkName}
            />
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}

export default LeftNavbar;
//==================================================================
//LEFTNAVBAR STYLING COMPONENTS

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  overflowy: "auto",
  zIndex: 5,
  background: "#242459",
  "&::-webkit-scrollbar": {
    width: 4,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  height: "100%",
  zIndex: 5,
  overflowy: "auto",
  "&::-webkit-scrollbar": {
    width: 4.5,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
  background: "#ffff",
  width: `calc(${theme.spacing(0)} + -2px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(-1)} + -2px)`,
  },
});
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
  marginTop: "9px",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "11px",
  [theme.breakpoints.down("sm")]: {
    flexShrink: 5,
  },

  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
