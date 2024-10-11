// import { RHFSelect, RHFTelInput, RHFTextField } from "@/components/rhf";
// import { RHFUploadSingleFileWithoutPreview } from "@/components/rhf/rhf-upload";
import { RHFTextField } from "@/src/components/rhf";
import { Button, Grid, Typography } from "@mui/material";

function IntroVideoForm() {
  return (
    <Grid container>
      <Grid xs={12} sm={12} p={1} item>
        <RHFTextField
          label="About You"
          fullWidth
          name="About"
          placeholder="Write a Short description about yourself"
          multiline="true"
          rows={4}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid
        xs={12}
        sm={12}
        p={1}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        item
      >
        <Typography
          variant="subtitle1"
          component="span"
          textAlign="center"
          color="intial"
        >
          <Button variant="text" color="primary">
            Click here
          </Button>
          {`Click here To Upload OR Record a Intro Video`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default IntroVideoForm;
