import { LogoSsoAdmin } from "@/src/assets/logo-sso-admin";
import {
  Container,
  styled,
  Button,
  // Select,
  MenuItem,
  // InputLabel,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Poppins } from "next/font/google";
// import Image from "next/image";
import Link from "next/link";
// import mainLogo from "../../../assets/mainlogo.png";
// import { LogoSsoAdmin } from "@/assets/logo-sso-admin";
import { useEffect, useState } from "react";
const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "Home", link: "" },
  { id: 2, title: "Find Tutors", link: "" },
  { id: 3, title: "Become A Tutor", link: "" },
  { id: 4, title: "Business Training", link: "" },
  { id: 5, title: "Blog", link: "" },
];
function SaleHeader() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the page is scrolled to the top
      if (scrollTop === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      sx={{
        background: "transparent",
        position: "fixed",
        zIndex: 5,
        boxShadow: "none",
        transition: "all 0.4s ease",
        display:{xs:"none",lg:"block"}
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", lg: "flex" },
              background: isTop
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(4, 164, 209, 1)",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              px: 2,
              py: 0.5,
              mt: 0.8,
              borderRadius: "5rem",
              backdropFilter: "blur(7px)",
              border: "1px solid rgba(255, 255, 255, 1)",
              transition: "all 0.4s ease",
            }}
          >
            <LogoSsoAdmin
              sx={() => ({
                width: "300px",
                height: "60px",
              })}
            />
            <Box ml="auto"></Box>

            {pagesNavbar.map((page) => (
              <StyledNavLink
                key={page.id}
                href={page.link}
                sx={() => ({
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
                    backgroundColor: "rgba(39, 33, 95, 1)",
                    color: "white",
                    boxShadow: " 0px 0px 14px 0px rgba(36, 36, 89, 0.7)",
                    borderRadius: "6px 0px 16px 0px",
                  },

                  "@media (max-width: 1400px)": {
                    fontSize: "1.6rem",
                    padding: "2.3rem 0.5rem",
                  },
                })}
              >
                {page.title}
              </StyledNavLink>
            ))}

            <Box
              width={"20%"}
              ml="auto"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box width={"100%"}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="English, USD"
                  fullWidth
                >
                  <MenuItem>allset</MenuItem>
                </TextField>
              </Box>

              <Box width={"40%"}>
                <Link href={"/sign-in"}>
                  <Button
                    variant="contained"
                    size="large"
                    color={"secondary"}
                    fullWidth
                    sx={{
                      borderRadius:5
                    }}
                  >
                    Login
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SaleHeader;
const StyledNavLink = styled(Link)(({ }) => ({}));
