import { FormProvider, RHFRadioGroup, RHFTextField } from "@/src/components/rhf";
import { Button, Grid, Paper, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";
import { useRouter } from "next/navigation";
import { useDonorKycMutation } from "@/src/services/auth-api";
import * as Yup from 'yup';
import toast from "react-hot-toast";

const steps = ['Basic Details', 'Personal Identification'];
export const Schema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  contact_num: Yup.string().required('contact_num is required'),
  description: Yup.string().required('Description is required'),
  company_name: Yup.string(),
  ntn: Yup.string(),
  id_card_num: Yup.string(),
  front_card: Yup.string(),
  back_card: Yup.string(),
  individual_or_company: Yup.boolean().required('individual_or_company is required'),
});
function DashboardSection() {
  const [ dononorKyc ] = useDonorKycMutation()
  const router = useRouter()
  const methods = useForm({
    defaultValues: {
      individual_or_company: 'individual',
      address: '',
      contact_num: '',
      description: '',
      company_name: '',
      ntn: '',
      id_card_num: '',
      front_card: '',
      back_card: ''


    },
  });

  const { handleSubmit, watch } = methods;
  const [activeStep, setActiveStep] = useState(0);
  const typeValue = watch('individual_or_company');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data: any) => {
    if (activeStep === steps.length - 1) {
      
      console.log(data);
      const value:any = data.individual_or_company==='individual'?true:false
      try {
        const formData = new FormData(); // Use FormData for multipart/form-data
        formData.append("contact_num", data.contact_num);
        formData.append("individual_or_company", value);
        formData.append("ntn", data.ntn);
        formData.append("company_name", data.company_name);
        formData.append("address", data.address);
        formData.append("id_card_num", data.id_card_num);
        formData.append("description", data.description);
        formData.append("front_card", data.front_card);
        formData.append("back_card", data.back_card);
        // Perform login mutation using RTK Query
        const response = await dononorKyc(formData).unwrap();
        
        toast.success(response?.message || "Your request was sent for verification successfully!");
        router?.push('/donor-dashboard');
        
      } catch (error: any) {
        console.error(error);
        toast.error(error?.data?.message || "Something went wrong!");
      }
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
                    <RHFTextField name="contact_num" label="Contact No" size="small" />
                  </Grid>
                  <Grid item xs={12} md={6} />
                  <Grid item xs={12} md={6}>
                    <RHFTextField name="address" label="Address" size="small" />
                  </Grid>
                  <Grid item xs={12} md={6} />
                  <Grid item xs={12} md={6}>
                    <RHFTextField name="description" size="small" label="Description" multiline rows={5} />
                  </Grid>
                  <Grid item xs={12} md={6} />
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Grid item xs={12} md={6}>
                    <RHFRadioGroup
                      name="individual_or_company"
                      row={false}
                      options={[
                        { label: 'Individual', value: 'individual' },
                        { label: 'Company', value: 'company' },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} />

                  {/* Conditional rendering based on typeValue */}
                  {typeValue === 'individual' ? (
                    <>
                      <Grid item xs={12} md={6}>
                        <RHFTextField name="id_card_num" size="small" label="ID Card No" />
                      </Grid>
                      <Grid item xs={12} md={6} />
                      <Grid item xs={12} md={6}>
                        <RHFUploadSingleFileWithPreview name="front_card" outerLabel="Upload ID Card Front Pic" />
                      </Grid>
                      <Grid item xs={12} md={6} />
                      <Grid item xs={12} md={6}>
                        <RHFUploadSingleFileWithPreview name="back_card" outerLabel="Upload ID Card Back Pic" />
                      </Grid>
                      <Grid item xs={12} md={6} />
                    </>
                  ) : (
                    <>

                      <Grid item xs={12} md={6}>
                        <RHFTextField name="ntn" label="Company NTN Number" />
                      </Grid>
                      <Grid item xs={12} md={6} />
                      <Grid item xs={12} md={6}>
                        <RHFTextField name="company_name" label="Company Registeration Number" />
                      </Grid>
                      <Grid item xs={12} md={6} />

                    </>
                  )}
                </>
              )}

              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? 'Apply KYC' : 'Next'}
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
