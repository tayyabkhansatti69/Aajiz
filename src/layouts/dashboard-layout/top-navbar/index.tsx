// MUI IMPORTS
import {
  Box,
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

import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavListData } from "../left-navbar/left-navbar.data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function TopNavBar(props: any) {
  const theme: any = useTheme();
  const { handleDrawer, leftopen } = props;
  // to handle drawer in different size
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const title=NavListData.filter(nav => pathname.includes(nav.link))[0]?.label
  return (
    <Box position={{md:"fixed",xs:"static"}} boxShadow={0} sx={Styles.mainBoxStyle(leftopen, theme)}>
      <Grid container>
        <Grid xs={12} item display="flex" alignItems="center" flexWrap={"wrap"} px={3}>
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
            gap={2}
            flexWrap={"wrap"}
          >
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} border={'1px solid  var(--Color-Gray-100, #EDEDED)'} gap={1}>
           <IconButton>
              <Image src={person} alt="person" />
            </IconButton>
            <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Typography variant="body2" fontWeight={600}>Waden Warrne</Typography>
            <Typography variant="caption">Partner</Typography>
            </Box>
            <KeyboardArrowDownIcon/>
            </Box>
            <IconButton>

              <IconSetting sx={{ color: "#9A9A9A" }}/>
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
