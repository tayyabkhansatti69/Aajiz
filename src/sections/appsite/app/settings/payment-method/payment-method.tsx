import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import card from "@/src/assets/image/card.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

import AddCardModel from "./addCardModel/AddCardModel";
import IconVisa from "@/src/assets/icons/Transaction/icon-visa";
import IconMaster from "@/src/assets/icons/Transaction/icon-master";
import { FormProvider, RHFSelect, RHFTextField } from "@/src/components/rhf";

function PaymentMethodSection() {
  const methods = useForm({
    defaultValues: {},
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {};
  return (
    <div>
      <Stack justifyContent={"center"} alignItems={"center"} mt={2} gap={1}>
        <Stack direction={"row"} gap={1} alignItems={"center"}>

        <Image src={card} alt="card" />
        <AddCardModel />
        </Stack>
        <Typography variant="body1" color="initial" fontWeight={600}>
          Use save Card
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container px={20}>
            <Grid xs={12} sm={12} p={1} item>
              <RHFSelect label="Select Card" fullWidth name="card" />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <RHFTextField label="Name on Card*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
              <RHFTextField label="Card Number*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField label="Expiry Date*" fullWidth name="cardName" />
            </Grid>
            <Grid xs={12} sm={6} p={1} item>
              <RHFTextField
                type="password"
                fullWidth
                label="cvv*"
                name="cvv"
              />
            </Grid>
            <Grid xs={12} sm={12} p={1} item>
            <Stack my={1} direction="row" justifyContent="end" spacing={2}>
                <IconVisa />
                <IconMaster />
                </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </Stack>
    </div>
  );
}

export default PaymentMethodSection;
