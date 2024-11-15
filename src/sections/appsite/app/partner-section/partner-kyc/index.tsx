import {
  FormProvider,
  RHFAutocompleteAsync,
  RHFRadioGroup,
  RHFTextField,
} from "@/src/components/rhf";
import {
  Button,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";
import { useRouter } from "next/navigation";
import { usePartnerKycMutation } from "@/src/services/auth-api";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useLazyGetIndustryTypeDropdownListQuery } from "@/src/services/donor/donate-now/donate-now-api";
// import { yupResolver } from "@hookform/resolvers/yup";
import { clearLocalStorage } from "@/src/utils";
import { useState } from "react";
import Image from "next/image";
import partnerGif from "../../../../../assets/gif/partnerKyc.gif";
import partnerGif1 from "../../../../../assets/gif/partnerKyc1.gif";

const steps = ["Basic Details", "Personal Identification"];
export const Schema = () =>
  Yup.object().shape({
    business_name: Yup.string().required("Business Name is required"),
    business_logo: Yup.string().required("Business Logo is required"),
    business_email: Yup.string()
      .email("Invalid email")
      .required("Business Email is required"),
    address: Yup.string().required("Address is required"),
    contact_num: Yup.string().required("Contact number is required"),

    ntn: Yup.string().required("NTN is required"),
    id_card_num: Yup.string().nullable(),
    front_card: Yup.string().nullable(),
    back_card: Yup.string().nullable(),
    individual_or_company: Yup.string().required(
      "Individual or company selection is required"
    ),
    industry_id: Yup.object().nullable().required("Industry type is required"),
  });
function PartnerKyc() {
  // const [companyType, setCompanyType] = useState<any>('')
  const industryTypeDropdownList = useLazyGetIndustryTypeDropdownListQuery();
  const [partnerKyc] = usePartnerKycMutation();
  const router = useRouter();
  const methods = useForm({
    // resolver: yupResolver(Schema(companyType)),
    defaultValues: {
      business_name: "",
      business_logo: "",
      business_email: "",
      individual_or_company: "individual",
      address: "",
      contact_num: "",
      description: "",
      ntn: "",
      id_card_num: "",
      front_card: "",
      back_card: "",
      industry_id: null,
    },
  });

  const { handleSubmit, watch } = methods;
  const [activeStep, setActiveStep] = useState(0);
  const typeValue = watch("individual_or_company");

  // useEffect(() => {
  //     setCompanyType(typeValue)
  // }, [typeValue])
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data: any) => {
    if (activeStep === steps.length - 1) {
      console.log(data);
      const value: any =
        data.individual_or_company === "individual" ? true : false;
      try {
        const formData = new FormData(); // Use FormData for multipart/form-data

        formData.append("business_name", data.business_name);
        formData.append("business_logo", data.business_logo);
        formData.append("business_email", data.business_email);
        formData.append("contact_num", data.contact_num);
        formData.append("industry_id", data.industry_id?.id);
        formData.append("description", data.description);
        formData.append("individual_or_company", value);
        formData.append("ntn", data.ntn);
        formData.append("address", data.address);
        formData.append("id_card_num", data.id_card_num);

        formData.append("front_card", data.front_card);
        formData.append("back_card", data.back_card);
        // Perform login mutation using RTK Query
        const response = await partnerKyc(formData).unwrap();

        toast.success(
          response?.message ||
            "Your request was sent for verification successfully!"
        );
        clearLocalStorage();
        router?.push("/sign-in");
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
              Steps to complete Partner profile
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
                  <Grid item lg={6} xs={12} container>
                    <Grid item xs={12}>
                      <RHFTextField
                        name="business_name"
                        size="small"
                        outerLabel="Business Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFUploadSingleFileWithPreview
                        name="business_logo"
                        outerLabel="Business Logo"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFTextField
                        name="business_email"
                        size="small"
                        outerLabel="Businessn Email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFTextField
                        name="contact_num"
                        outerLabel="Contact No"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFTextField
                        name="address"
                        outerLabel="Address"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFTextField
                        name="description"
                        size="small"
                        label="Description"
                        multiline
                        rows={5}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    sx={{
                      display: { lg: "flex", xs: "none" },
                      justifyContent: "center",
                    }}
                  >
                    <Image src={partnerGif1} alt="" />
                  </Grid>
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Grid item lg={6} xs={12}>
                    <Grid item xs={12}>
                      <RHFAutocompleteAsync
                        name="industry_id"
                        outerLabel="Select Industry Type"
                        apiQuery={industryTypeDropdownList}
                        transformResponse={(res) => res?.body}
                        getOptionLabel={(option: any) => option.industry_name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <RHFRadioGroup
                        name="individual_or_company"
                        row={false}
                        options={[
                          { label: "Individual", value: "individual" },
                          { label: "Company", value: "company" },
                        ]}
                      />
                    </Grid>
                    {typeValue === "individual" ? (
                      <>
                        <Grid item xs={12}>
                          <RHFTextField
                            name="id_card_num"
                            size="small"
                            label="ID Card No"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <RHFUploadSingleFileWithPreview
                            name="front_card"
                            outerLabel="Upload ID Card Front Pic"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <RHFUploadSingleFileWithPreview
                            name="back_card"
                            outerLabel="Upload ID Card Back Pic"
                          />
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item xs={12}>
                          <RHFTextField name="ntn" label="Company NTN Number" />
                        </Grid>
                        <Grid item xs={12}>
                          <RHFTextField
                            name="company_name"
                            label="Company Registeration Number"
                          />
                        </Grid>
                      </>
                    )}
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    sx={{
                      display: { lg: "flex", xs: "none" },
                      justifyContent: "center",
                    }}
                  >
                    <Image src={partnerGif} alt="" />
                  </Grid>
                  {/* Conditional rendering based on typeValue */}
                </>
              )}

              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth type="submit">
                  {activeStep === steps.length - 1 ? "Apply KYC" : "Next"}
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

export default PartnerKyc;
