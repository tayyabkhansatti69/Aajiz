import { FormProvider, RHFSelect, RHFTextField } from "@/src/components/rhf";
import { Button, Grid, Paper, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";

const steps = ['Basic Details', 'Personal Identification', 'KYC Process'];

function DashboardSection() {
  const methods = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = methods;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    if (activeStep === steps.length - 1) {
      // Handle form submission on final step
      console.log(data);
    } else {
      handleNext();
    }
  };

  return (
    <Grid container px={2} pt={7}>
      <Grid item xs={12}>
        <Paper variant="elevation" elevation={2} sx={{ padding: 2 }}>
          <Grid item xs={12} md={9} mt={2} mb={2}>
            <Typography variant="body1" fontWeight={700}>
              Steps to complete Donor profile
            </Typography>
          </Grid>

          {/* Stepper Component */}
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
             
              <Grid container spacing={2} mt={2}>
                {/* Conditional rendering based on active step */}
                {activeStep === 0 && (
                  <>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="contactNo" label="Contact No"  size="small"/>
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="address" label="Address" size="small" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="description" size="small" label="Description" multiline rows={5} />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                  </>
                )}

                {activeStep === 1 && (
                  <>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="idCardNo" size="small" label="ID Card No" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      {/* Assuming RFHUpload is your custom upload component */}
                      <RHFUploadSingleFileWithPreview size="small" name="upload" outerLabel="Upload ID Card Front Pic" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                  
                      <RHFUploadSingleFileWithPreview  size="small" name="upload" outerLabel="Upload ID Card Back Pic" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                  <Grid item xs={12} md={6}>
                  <RHFSelect label="Business Type" fullWidth name="bussinessType" />
                  </Grid>
                  <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="companyNtn" label="Company NTN Number" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="taxIdentificationNo" label="Text Identification Number" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                    <Grid item xs={12} md={6}>
                      <RHFTextField name="ragisterationDate" label="Registeration Date" />
                    </Grid>
                    <Grid item xs={12} md={6}/>
                  </>
                )}

                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={activeStep === steps.length - 1 ? handleSubmit(onSubmit) : handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Complete Profile' : 'Next'}
                  </Button>
                </Grid>

                {activeStep > 0 && (
                  <Grid item xs={12} md={6}>
                    <Button variant="outlined" fullWidth onClick={handleBack}>
                      Back
                    </Button>
                  </Grid>
                )}
              </Grid>
            
          </FormProvider>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DashboardSection;
