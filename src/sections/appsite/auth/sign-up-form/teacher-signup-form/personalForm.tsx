// import { RHFSelect, RHFTelInput, RHFTextField } from "@/components/rhf";
// import { RHFUploadSingleFileWithoutPreview } from "@/components/rhf/rhf-upload";
import { RHFSelect, RHFTelInput, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithoutPreview } from "@/src/components/rhf/rhf-upload";
import { Grid } from "@mui/material";

function PersonalForm() {
  return (
    <Grid container>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Name *"
          fullWidth
          name="name"
          placeholder="Enter Name Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Email *"
          fullWidth
          name="email"
          placeholder="Enter Email Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTelInput
          label="Phone *"
          fullWidth
          name="Phone"
          placeholder="+xx xxxx xxxx"
        />
      </Grid>

      <Grid xs={12} sm={6} p={1} item>
        <RHFSelect
          label="Gender *"
          fullWidth
          name="Gender"
          placeholder="Select Grade"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Age *"
          fullWidth
          name="age"
          placeholder="Enter Age "
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFUploadSingleFileWithoutPreview
          placeholder="Upload Photo .jpeg , .png , .jpg"
          label="Photo *"
          name="photo"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="password"
          fullWidth
          label="Password *"
          name="password"
          placeholder="Enter Password Here"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="password"
          fullWidth
          label="confirm Password *"
          name="confirmPassword"
          placeholder="Enter Password Here"
        />
      </Grid>
    </Grid>
  );
}

export default PersonalForm;
