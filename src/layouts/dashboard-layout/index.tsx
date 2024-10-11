import { useEffect, useState } from "react";
// @mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar";
import TopNavBar from "./top-navbar";

function DashboardLayout({ children, ...other }: any) {
  console.log(other)
  const theme = useTheme();
  // to handle drawer in different size
  const screenSizeHandler = useMediaQuery(theme.breakpoints.up("md"));
  // to handle drawer in different size
  const [open, setOpen] = useState(true);

  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  // open and close drawer in screen size
  useEffect(() => {
    if (screenSizeHandler) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [screenSizeHandler]);
  const [linkName,setLinkName] = useState('Dashboard');

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={styles.mainBoxStyles}>
        {/* leftnavbar */}
        <LeftNavbar setLinkName={setLinkName} handleDrawer={handleDrawer} open={open} />
        <Box overflow="auto" sx={styles.parentChildrenStyles(theme, open)}>
          <TopNavBar linkName={linkName} leftopen={open} handleDrawer={handleDrawer} />
          <Box className="allset" sx={styles.childrenStyles()}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
// Styles for main dashboard layout
const styles = {
  mainBoxStyles: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
  parentChildrenStyles: (theme: any, open: boolean) => ({
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      transition: theme.transitions.create("width", {
        duration: "0.4s",
      }),
      width: open === true ? "calc(100% - 300px)" : "100%",
      
    },
  }),

  childrenStyles: () => ({
    mt:5,
    mb:10
  }),
};
