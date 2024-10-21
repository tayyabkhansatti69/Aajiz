import {
  FormProvider,
  RHFAutocompleteAsync,
  RHFCustomSelect,
  RHFTextField,
} from "@/src/components/rhf";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { UseDonateNow } from "./use-donate-now";
import { EStamps } from "../e-stamps";

function DonateNowSection() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    router,
    stampType,
    isLoading,
    industryTypeDropdownList,
    loadCardLoading,
    eStamp,
  } = UseDonateNow();
  return eStamp ? (
    <Stack>
      <Button
        variant="text"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ mr: "auto" }}
        onClick={() => {
          router.push("/donor-dashboard");
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
              mb={8}
              mt={2}
            >
              <Typography variant="h6" fontWeight="bold">
                Minimum Card Limit
              </Typography>
              <Typography variant="body2">100 RS</Typography>
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
                  <RHFCustomSelect
                    name="type"
                    outerLabel="Select Type"
                    options={[
                      { id: 1, label: "E-Stamp", value: "eStamp" },
                      {
                        id: 2,
                        label: "Physical Card",
                        value: "physicalCard",
                      },
                    ]}
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
                {stampType === "eStamp" && (
                  <Grid item md={6} xs={12} mt={2} mb={2}>
                    <RHFTextField
                      name="cardAmount"
                      outerLabel="Per Card Amount"
                    />
                  </Grid>
                )}
                {stampType === "physicalCard" && (
                  <Grid item md={6} xs={12} mt={2} mb={2}>
                    <RHFTextField name="cardNo" outerLabel="Card Number" />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <LoadingButton
                    variant="contained"
                    type="submit"
                    sx={{ minWidth: "300px" }}
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
    <EStamps
      eStampData={[
        { id: 1, industryType: "food" },
        { id: 2, industryType: "medical" },
        { id: 3, industryType: "clothing" },
      ]}
    />
  );
}

export default DonateNowSection;
