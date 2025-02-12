import { FormProvider, RHFTextField } from "@/src/components/rhf";
import { RHFUploadSingleFileWithoutPreview } from "@/src/components/rhf/rhf-upload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { data } from "./data";
import { UseSupport } from "./useSupport";
import { LoadingButton } from "@mui/lab";

function SupportSection() {
  const { methods, handleSubmit, onSubmit, isLoading } = UseSupport();

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={600}>
          FAQs
        </Typography>

        {/* FAQ Section */}
        {data.map((items) => (
          <Accordion key={items?.id} sx={{ borderRadius: 2, boxShadow: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ px: 2, py: 1 }}
            >
              <Typography variant="body1" fontWeight={500}>
                {items?.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, py: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {items?.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Submit a Query Section */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
          Submit a Query
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack rowGap={2}>
            <RHFTextField name="subject" outerLabel="Subject" />
            <RHFTextField
              name="description"
              outerLabel="Description"
              multiline
              rows={5}
            />
            <RHFUploadSingleFileWithoutPreview
              name="media"
              label="Upload Media"
            />
            <LoadingButton
              loading={isLoading}
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "fit-content", alignSelf: "start", mt: 2 }}
            >
              Submit
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </Box>
  );
}
export default SupportSection;
