// MUI IMPORTS
import {
  Box,
  Button,
  Grid,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";

//ICONS
import person from "@/src/assets/png/person.png";
import MenuIcon from "@mui/icons-material/Menu";
//next imports
import Iconbell from "@/src/assets/icons/dashboard-main/Icon-bell";
import IconMassage from "@/src/assets/icons/dashboard-main/Icon-massage";
import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";
import IconWallet from "@/src/assets/icons/dashboard-main/icon-wallet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavListData } from "../left-navbar/left-navbar.data";

function TopNavBar(props: any) {
  const theme: any = useTheme();
  const { handleDrawer, leftopen } = props;
  // to handle drawer in different size
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const title=NavListData.filter(nav => pathname.includes(nav.link))[0]?.label
  return (
    <Box position={{md:"fixed",xs:"static"}} boxShadow={1} sx={Styles.mainBoxStyle(leftopen, theme)}>
      <Grid container>
        <Grid xs={12} item display="flex" alignItems="center" flexWrap={"wrap"}>
          {screenSizeHandler && (
            <IconButton onClick={handleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography fontSize={"25px"} color={"#343C6A"} fontWeight={600}>
            {title}
          </Typography>

          <Box
            ml={"auto"}
            display={"flex"}
            alignItems={"center"}
            gap={3}
            flexWrap={"wrap"}
          >
            <Button variant="text" size="small" sx={{ color: "common.black" }}  startIcon={<IconWallet />}>
              0 USD
            </Button>
            <Button variant="outlined" sx={{ color: "common.black" }} size="small">invite Friend</Button>
            <IconButton>
              <IconMassage />
            </IconButton>
            <IconButton>
              <Iconbell />
            </IconButton>
            <IconButton>
              <IconSetting sx={{ color: "#9A9A9A" }}/>
            </IconButton>
            <IconButton>
              <Image src={person} alt="person" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopNavBar;
//===============================================================================================
// TOPNAVBAR STYLE COMPONENTS

const Styles = {
  mainBoxStyle: (leftopen: boolean, theme: Theme) => ({
    px: 1,
    py: 1,
    background: "#FFFF",
    zIndex: 1000,
    width: leftopen === true ? "calc(100% - 300px)" : "100%",
    transition: theme.transitions.create("width", {
      duration: 400,
    }),
  }),
};
