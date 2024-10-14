import { AajizLogo } from "@/src/assets/aajiz-logo";
import { Button, styled, Drawer, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "Home", link: "" },
  { id: 2, title: "About Us", link: "" },
  { id: 3, title: "Partner", link: "" },
  { id: 4, title: "Doner", link: "" },
  { id: 5, title: "Contact Us", link: "" },
];

function SaleHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: "#0ebdbe",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pagesNavbar.map((page) => (
        <StyledNavLink
          key={page.id}
          href={page.link}
          sx={{
            color: "white",
            padding: "16px 0",
            fontFamily: inter.style.fontFamily,
            fontSize: "1.5rem",
            textDecoration: "none",
            width: "100%",
            textAlign: "center",
          }}
        >
          {page.title}
        </StyledNavLink>
      ))}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          borderRadius: 5,
          background: "#0b767a",
          color: "#fff",
        }}
      >
        Join Us
      </Button>
    </Box>
  );

  return (
    <AppBar
      sx={{
        background: "#0ebdbe",
        position: "fixed",
        zIndex: 5,
        boxShadow: "none",
        transition: "all 0.4s ease",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", lg: "none" },
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
            alignItems: "center",
            my: { xs: 1, sm: 2 },
          }}
        >
          <AajizLogo
            sx={{
              width: "80px",
              height: "60px",
            }}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", lg: "flex" },
            background: "#0ebdbe",
            alignItems: "center",
            px: 1,
            py: 0.5,
            mt: 0.8,
            backdropFilter: "blur(7px)",
            width: "100%",
          }}
        >
          <AajizLogo
            sx={{
              width: "100px",
              height: "80px",
            }}
          />
          <Box ml="auto"></Box>
          {pagesNavbar.map((page) => (
            <StyledNavLink
              key={page.id}
              href={page.link}
              sx={{
                position: "relative",
                padding: "7px 11px",
                color: "white",
                display: "block",
                borderBottom: "3px solid transparent",
                textDecoration: "none",
                textAlign: "center",
                fontFamily: inter.style.fontFamily,
                fontSize: "1.7rem",
                "&:hover": {
                  backgroundColor: "#0b767a",
                  color: "white",
                  boxShadow: "0px 0px 14px 0px rgba(36, 36, 89, 0.7)",
                  borderRadius: "6px 0px 16px 0px",
                },
                "@media (max-width: 1400px)": {
                  fontSize: "1.6rem",
                  padding: "2.3rem 0.5rem",
                },
              }}
            >
              {page.title}
            </StyledNavLink>
          ))}
          <Box width={"10%"} ml="auto" display="flex" alignItems="center" justifyContent="right">
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 5,
                background: "#0b767a",
              }}
            >
              Join Us
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default SaleHeader;

const StyledNavLink = styled(Link)(({}) => ({}));
