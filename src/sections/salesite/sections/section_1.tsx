
import {

  Box,
  Grid,
  Typography,

} from "@mui/material";

function Section_one() {
  return (
    <Grid container  sx={{ background: '#FF00FF',mt:8 }}>
      <Grid xs={12} item>
        <Box height={'100vh'} mt={2}>
          <Typography>Start working from this section </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Section_one;
