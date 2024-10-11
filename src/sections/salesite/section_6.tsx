import { Box, Grid, InputBase, Button, Typography } from "@mui/material";
import React from "react";
import bgIMG from "@/src/assets/as/bg-kdk.png";
import girlimg from "@/src/assets/as/girl-1 1.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function Section_6() {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${bgIMG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // You might want to add this for better visual
      }}
    >
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        display="flex"
        alignItems="center"
        flexWrap="wrap"
      >
        <Image src={girlimg} alt="girlimg" layout="responsive" style={{ width: "100%" }} />
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography
            variant="h3"
            sx={{ color: "white", textTransform: "capitalize" }}
          >
            <span style={{ color: "white" }}>Want to stay </span>
            <span style={{ color: "white", fontWeight: "bold" }}>informed </span>
            <span style={{ color: "white" }}>about</span>
            <br />
            <span style={{ color: "white" }}>new </span>
            <span style={{ color: "white", fontWeight: "bold" }}>courses & study?</span>
          </Typography>

          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" width="100%">
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "100%",
                height: "60px",
                minWidth: { xs: "300px", lg: "536px" },
                borderRadius: "60px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type your email here"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              sx={{ minWidth: { xs: 100, lg: 300 }, borderRadius: 6 }}
            >
              Contact US
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
