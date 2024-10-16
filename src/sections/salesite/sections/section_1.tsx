import landingImage from "@/src/assets/image/landingImage.png";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  SvgIcon,
  Typography
} from "@mui/material";

function Section_one() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Box
          sx={{
          //  backgroundImage: `url(${landingImage.src})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#0b767a",
              zIndex: 2,
              borderRadius: 1,
            }}
          />
          <Box position="relative" zIndex={3} width="100%">
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                transform: "translate(200px, 300px)",
              }}
            ></Box>

            <SvgIcon
              viewBox="0 0 25 25"
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateY(-100px) translateX(-50%)",
              }}
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
            </SvgIcon>
            <Container sx={{ position: "relative", zIndex: 3, py: 5, mt: 4 }}>
              <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid item lg={6} sx={{ order: { lg: 2 } }}>
                  <Box
                    sx={{
                      mx: "auto",
                      // border: "1px solid lightgrey",
                      // borderRadius: "50%",
                      position: "relative",
                      mb: { xs: 5, lg: 0 },
                      zIndex: 2,
                      // width: "75%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={landingImage.src}
                      alt="Landing Section Girl"
                     
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: { xs: "center", lg: "left" },
                    color: "white",
                  }}
                >
                  <Box mr={8}>
                    <Typography
                      variant="h1"
                      sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                    >
                      <span style={{ color: "black" }}>Join </span>
                      <span style={{ color: "white" }}>us </span>
                      <br />
                      <span style={{ color: "black" }}>for </span>
                      <span style={{ color: "white" }}>building </span>
                      <span style={{ color: "black" }}>a </span>
                      <br />
                      <span style={{ color: "white" }}>better </span>
                      <span style={{ color: "black" }}>world </span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section_one;
