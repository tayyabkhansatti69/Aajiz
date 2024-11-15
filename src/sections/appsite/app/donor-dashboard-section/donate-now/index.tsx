import {
  FormProvider,
  RHFAutocompleteAsync,
  RHFTextField,
} from "@/src/components/rhf";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { UseDonateNow } from "./use-donate-now";
import { EStamps } from "../e-stamps";
import { useGetDonorProfileQuery } from "@/src/services/donor/donor-dashboard/donor-dashboard";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

function DonateNowSection() {
  const { data: donorProfile } = useGetDonorProfileQuery({});

  const {
    methods,
    handleSubmit,
    onSubmit,
    router,
    isLoading,
    industryTypeDropdownList,
    loadCardLoading,
    eStamp,
    eStampData,
    selectedType,
    handleSelect,
  } = UseDonateNow();

  return eStamp ? (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        Back
      </Button>

      <Grid container px={2} pt={2}>
        <Grid item xs={12}>
          <Paper variant="elevation" elevation={2} sx={{ padding: 2 }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              my={2}
            >
              <Typography variant="h6" fontWeight="bold">
                Minimum Card Limit
              </Typography>
              <Typography variant="body2">100 RS</Typography>
              <Typography
                variant="h6"
                fontWeight={500}
                color="#0EBDBE"
                sx={{
                  border: "1px solid #0EBDBE",
                  borderRadius: 1,
                  py: 2,
                  px: 4,
                  my: 2,
                }}
              >
                Current Balance: {donorProfile?.body?.current_balance} Rs.
              </Typography>
            </Box>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <RHFTextField
                    name="amount"
                    outerLabel="Amount"
                    // type="number"
                    placeholder="100 Rs"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <RHFAutocompleteAsync
                    name="industryType"
                    outerLabel="Select Industry Type"
                    apiQuery={industryTypeDropdownList}
                    transformResponse={(res) => res?.body}
                    getOptionLabel={(option: any) => option.industry_name}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  container
                  columnSpacing={2}
                  rowGap={2}
                >
                  <Grid item  xs={12} md={6} lg={4}>
                    <Card
                      onClick={() => handleSelect("eStamp")}
                      sx={{
                        width: "80%",
                        py: 4,
                        cursor: "pointer",
                        border:
                          selectedType === "eStamp"
                            ? "2px solid #00BCD4"
                            : "1px solid #ccc",
                      }}
                    >
                      <Stack alignItems="center">
                        <PhoneIphoneOutlinedIcon
                          sx={{
                            width: "40px",
                            height: "40px",
                            color:
                              selectedType === "eStamp" ? "#00BCD4" : "#ccc",
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              selectedType === "eStamp" ? "#00BCD4" : "#ccc",
                          }}
                        >
                          E Stamp
                        </Typography>
                      </Stack>
                    </Card>
                  </Grid>
                  <Grid item  xs={12} md={6} lg={4}>
                    <Card
                      onClick={() => handleSelect("physicalCard")}
                      sx={{
                        width: "80%",
                        py: 4,
                        cursor: "pointer",
                        border:
                          selectedType === "physicalCard"
                            ? "2px solid #00BCD4"
                            : "1px solid #ccc",
                        backgroundColor:
                          selectedType === "physicalCard" ? "#E0F7FA" : "#fff",
                      }}
                    >
                      <Stack alignItems="center">
                        <PhoneIphoneOutlinedIcon
                          sx={{
                            width: "40px",
                            height: "40px",
                            color:
                              selectedType === "physicalCard"
                                ? "#00BCD4"
                                : "#ccc",
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              selectedType === "physicalCard"
                                ? "#00BCD4"
                                : "#ccc",
                          }}
                        >
                          Physical Card
                        </Typography>
                      </Stack>
                    </Card>
                  </Grid>
                  {selectedType === "eStamp" && (
                    <Grid item xs={6}>
                      <RHFTextField
                        name="cardAmount"
                        outerLabel="Per Card Amount"
                      />
                    </Grid>
                  )}
                  {selectedType === "physicalCard" && (
                    <Grid item xs={6}>
                      <RHFTextField name="cardNo" outerLabel="Card Number" />
                    </Grid>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    variant="outlined"
                    type="submit"
                    sx={{
                      minWidth: "300px",
                      ":hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    loading={isLoading || loadCardLoading}
                  >
                    Proceed
                  </LoadingButton>
                </Grid>
              </Grid>
            </FormProvider>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  ) : (
    <EStamps eStampData={eStampData} />
  );
}

export default DonateNowSection;
