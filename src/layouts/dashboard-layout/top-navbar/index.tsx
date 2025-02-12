// MUI IMPORTS
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//ICONS
import MenuIcon from "@mui/icons-material/Menu";
//next imports

// import IconSetting from "@/src/assets/icons/dashboard-main/icon-setting";

import { usePathname, useRouter } from "next/navigation";
import { NavListData } from "../left-navbar/left-navbar.data";
import NotificationIcon from "@/src/assets/icons/notification-icon";

function TopNavBar(props: any) {
  const theme: any = useTheme();
  const router = useRouter();
  const { handleDrawer, leftopen } = props;
  // to handle drawer in different size
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const title = NavListData.filter((nav) => pathname.includes(nav.link))[0]
    ?.label;
  const myValue: any = localStorage.getItem("rememberMe");
  const data: any = JSON.parse(myValue);
 
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  };
  return (
    <Box
      position={{ md: "fixed", xs: "static" }}
      boxShadow={0}
      sx={Styles.mainBoxStyle(leftopen, theme)}
    >
      <Grid container>
        <Grid
          xs={12}
          item
          display="flex"
          alignItems="center"
          flexWrap={"wrap"}
          px={3}
        >
          {screenSizeHandler && (
            <IconButton onClick={handleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant='h5' color={"#343C6A"} fontWeight={600}>
            {title}
          </Typography>

          <Box
            ml={"auto"}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            
            flexWrap={"wrap"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              border={"1px solid  var(--Color-Gray-100, #EDEDED)"}
              borderRadius={'8px'}
              gap={1}
            >
              <IconButton>
                <Avatar src={data?.Data_User?.profile_image_url} alt="person" />
              </IconButton>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                sx={{ pr: 1 }}
              >
                <Typography variant="body2" fontWeight={600}>
                  {data?.Data_User?.name}
                </Typography>
                <Typography variant="caption">
                  {capitalizeFirstLetter(data?.Data_User?.account_type)}
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => {
                router?.push("/notifications");
              }}
              sx={{ cursor: "pointer" }}
            >
              {/* <IconSetting sx={{ color: "#9A9A9A" }} /> */}
              <NotificationIcon sx={{ width: "40px", height: "40px" }} />
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
