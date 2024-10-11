// import {
//   RHFSelect,
//   // RHFTelInput,
//   RHFTextField
// } from "@/components/rhf";
// import { RHFUploadSingleFileWithoutPreview } from "@/components/rhf/rhf-upload";
import { RHFSelect, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithoutPreview } from "@/src/components/rhf/rhf-upload";
import {
  Grid
} from "@mui/material";

function WorkDetailsForm() {
  return (
    <Grid container>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Major *"
          fullWidth
          name="name"
          placeholder="e.g english"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Subject *"
          fullWidth
          name="subject"
          placeholder="Enter subject"
        />
      </Grid>
      

      <Grid xs={12} sm={6} p={1} item>
        <RHFSelect
          label="Level *"
          fullWidth
          name="level"
          placeholder="Select Grade"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFTextField
          type="text"
          label="Year of experience *"
          fullWidth
          name="experience"
          placeholder="Enter Year of experience"
        />
      </Grid>
      <Grid xs={12} sm={6} p={1} item>
        <RHFUploadSingleFileWithoutPreview
          placeholder="Upload cv "
          label="Attach cv"
          name="cv"
        />
      </Grid>
      
    </Grid>
  )
}

export default WorkDetailsForm
