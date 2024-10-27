import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Stack, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SupportSection() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={600}>
          FAQs
        </Typography>

        {/* FAQ Section */}
        {[...Array(3)].map((_, index) => (
          <Accordion key={index} sx={{ borderRadius: 2, boxShadow: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2, py: 1 }}>
              <Typography variant="body1" fontWeight={500}>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, py: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Submit a Query Section */}
        <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
          Submit a Query
        </Typography>

        <TextField label="Subject" variant="outlined" fullWidth margin="dense" />
        <TextField label="Description" variant="outlined" fullWidth margin="dense" multiline rows={4} />

        <Button variant="contained" color="primary" sx={{ width: "fit-content", alignSelf: "start", mt: 2 }}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
export default SupportSection