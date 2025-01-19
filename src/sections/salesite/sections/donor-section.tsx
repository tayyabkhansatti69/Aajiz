import {
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
function DonorSection() {
  // const classes = useStyles()
  const theme: any = useTheme();
  const screenSizeHandler = useMediaQuery(theme.breakpoints.down("md"));
  console.log(screenSizeHandler);
  return (
    <Container maxWidth={"xl"}>
      <Grid2 container>
        <Grid2 size={{ md: 6 }}>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            consequuntur blanditiis rerum ullam aliquid quasi amet ut quo
            molestiae vitae qui cupiditate illum repudiandae est reiciendis
            porro aliquam quaerat, soluta necessitatibus optio quam sapiente,
            nesciunt, consequatur dignissimos! Enim eos officiis quis culpa
            temporibus et. Vel ut in sapiente eveniet tempora ullam aspernatur
            sit quisquam necessitatibus debitis atque obcaecati, possimus
            consequuntur. Quia quasi, magni voluptas deserunt dolorum velit
            tenetur fuga laboriosam eos inventore, magnam qui tempora, assumenda
            enim corrupti aspernatur illo? Sed iste magnam voluptate minima
            omnis reiciendis. Deserunt laboriosam quidem similique, cum placeat
            earum non neque voluptas quia fugiat debitis.
          </Typography>
        </Grid2>
        <Grid2 size={{ md: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mx: "auto",
              col: { lg: 5 },
            }}
          >
            Donor Defined Image
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default DonorSection;
