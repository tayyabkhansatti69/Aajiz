import { FormProvider, RHFAutocompleteSync,  RHFTextField } from "@/src/components/rhf";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
 import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function DonateNowSection() {
     const router = useRouter();
    const methods = useForm({
        defaultValues: {},
    });

    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Stack >
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

        <Grid container px={2} pt={7}>
            <Grid item xs={12}>
                <Paper variant="elevation" elevation={2} sx={{ padding: 2 }}>
                    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" mb={8} mt={4}>
                        <Typography variant="body2" fontWeight="bold">
                            E-Stamp Limit
                        </Typography>
                        <Typography variant="caption">100 RS</Typography>
                    </Box>
                    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                         
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <RHFTextField name="amount" size="small" label="Stamp Amount" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <RHFAutocompleteSync
                                        name="type"
                                        size="small"
                                        label="Select Stamp Type"
                                        options={[
                                            { id: 1, name: "E-Stamp", value: "eStamp" },
                                            { id: 2, name: "Physical Card", value: "physicalCard" },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <RHFAutocompleteSync
                                        name="Industrytype"
                                        size="small"
                                        label="Select Industry Type"
                                        options={[
                                            { id: 1, name: "Pharmacy", value: "Pharmacy" },
                                            { id: 2, name: "Food", value: "food" },
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={12} mt={2} mb={2}>
                                    <RHFTextField name="cardNo" size="small" label="Card Number" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" type="submit" sx={{minWidth:'300px'}}>
                                        Proceed
                                    </Button>
                                </Grid>
                            </Grid>
                        
                    </FormProvider>
                </Paper>
            </Grid>
        </Grid>
        </Stack>
    );
}

export default DonateNowSection;
