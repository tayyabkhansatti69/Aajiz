import {
  FormProvider,
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
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";
import { useRouter } from "next/navigation";
import { useDonorKycMutation } from "@/src/services/auth-api";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { clearLocalStorage } from "@/src/utils";
import BasicInfo from "@/src/assets/gif/basic info.gif";
import IdCardVerification from "@/src/assets/gif/id card verification.gif";
import BusinessVerification from "@/src/assets/gif/business verification.gif";
import { yupResolver } from "@hookform/resolvers/yup";
const steps = ["Basic Details", "Personal Identification"];
// export const Schema=(typeofRegistery)=>{
//   return (  Yup.object().shape({
//   address: Yup.string().required('Address is required'),
//   contact_num: Yup.string().required('contact_num is required'),
//   description: Yup.string().required('Description is required'),
//   company_name: Yup.string(),
//   ntn: Yup.string(),
//   id_card_num: Yup.string(),
//   front_card: Yup.string(),
//   back_card: Yup.string(),
//   individual_or_company: Yup.string().required('individual_or_company is required'),
// });
// import * as Yup from 'yup';

export const Schema = (typeofRegistery, activeStep) => {
  return Yup.object().shape({
    address: Yup.string().required("Address is required"),
    contact_num: Yup.string()
      .required("Contact number is required")
      .matches(/^\d+$/, "Contact number must be numeric"),
    description: Yup.string().required("Description is required"),
    company_name:
      typeofRegistery === "company" && activeStep === 1
        ? Yup.string().required("Company name is required")
        : Yup.string(),
    ntn:
      typeofRegistery === "company" && activeStep === 1
        ? Yup.string().required("NTN is required")
        : Yup.string(),
    id_card_num:
      typeofRegistery === "individual" && activeStep === 1
        ? Yup.string().required("ID card number is required")
        : Yup.string(),
    front_card:
      typeofRegistery === "individual" && activeStep === 1
        ? Yup.mixed()
            .required("Front card is required")
            .test(
              "fileRequired",
              "A file must be uploaded for the front card",
              (value) => {
                if (!value) return false; // Required validation
                if (typeof value === "string") return value.trim().length > 0; // String validation
                if (value instanceof File) return value.size > 0; // File validation
                return false;
              },
            )
        : Yup.mixed(),

    back_card:
      typeofRegistery === "individual" && activeStep === 1
        ? Yup.mixed()
            .required("Back card is required")
            .test(
              "fileRequired",
              "A file must be uploaded for the back card",
              (value) => {
                if (!value) return false; // Required validation
                if (typeof value === "string") return value.trim().length > 0; // String validation
                if (value instanceof File) return value.size > 0; // File validation
                return false;
              },
            )
        : Yup.mixed(),

    individual_or_company:
      activeStep === 1
        ? Yup.string().required("Type is required")
        : Yup?.string(),
  });
};

function DashboardSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [dononorKyc] = useDonorKycMutation();
  const [valueOfRegister, setValueOfRegister] = useState<any>("individual");
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(Schema(valueOfRegister, activeStep)),
    defaultValues: {
      individual_or_company: "individual",
      address: "",
      contact_num: "",
      description: "",
      company_name: "",
      ntn: "",
      id_card_num: "",
      front_card: "",
      back_card: "",
    },
  });

  const { handleSubmit, watch } = methods;

  const typeValue = watch("individual_or_company");

  useEffect(() => {
    setValueOfRegister(typeValue);
  }, [typeValue]);

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
        toast.success(
          response?.message ||
            "Your request was sent for verification successfully!",
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
                  <Grid
                    container
                    spacing={1}
                    display={"flex"}
                    alignItems={"center"}
                    padding={"0rem 2rem"}
                    justifyContent={"flex-start"}
                  >
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <RHFTextField
                            name="contact_num"
                            label="Contact No"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <RHFTextField
                            name="address"
                            label="Address"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <RHFTextField
                            name="description"
                            label="Description"
                            size="small"
                            multiline
                            rows={5}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={5}
                      justifyContent={"end"}
                      alignItems={"end"}
                      display={"flex"}
                    >
                      <Box>
                        <img
                          src={BasicInfo?.src}
                          alt="Loading..."
                          style={{ width: "200px", height: "auto" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Grid item xs={12} md={6}>
                    <RHFRadioGroup
                      name="individual_or_company"
                      row={false}
                      options={[
                        { label: "Individual", value: "individual" },
                        { label: "Company", value: "company" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} />

                  {/* Conditional rendering based on typeValue */}
                  {typeValue === "individual" ? (
                    <>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        alignItems="center"
                        padding="0rem 2rem"
                        justifyContent="space-between"
                      >
                        {/* Left side fields */}
                        <Grid item xs={12} md={6}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <RHFTextField
                                name="id_card_num"
                                size="small"
                                fullWidth
                                label="ID Card No"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <RHFUploadSingleFileWithPreview
                                name="front_card"
                                fullWidth
                                outerLabel="Upload ID Card Front Pic"
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <RHFUploadSingleFileWithPreview
                                name="back_card"
                                fullWidth
                                outerLabel="Upload ID Card Back Pic"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* Right side image */}
                        <Grid
                          item
                          xs={12}
                          md={6}
                          display="flex"
                          justifyContent="center"
                          alignItems="flex-start"
                        >
                          <Box>
                            <img
                              src={IdCardVerification?.src}
                              alt="Loading..."
                              style={{ width: "300px", height: "auto" }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        alignItems="center"
                        padding="0rem 2rem"
                        justifyContent="space-between"
                      >
                        {/* Left side fields */}
                        <Grid item xs={12} md={6}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <RHFTextField
                                name="ntn"
                                label="Company NTN Number"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={12}>
                              <RHFTextField
                                name="company_name"
                                label="Company Registration Number"
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* Right side image */}
                        <Grid
                          item
                          xs={12}
                          md={6}
                          display="flex"
                          justifyContent="center"
                          alignItems="flex-start"
                        >
                          <Box>
                            <img
                              src={BusinessVerification?.src}
                              alt="Loading..."
                              style={{ width: "220px", height: "auto" }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </>
                  )}
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

export default DashboardSection;
