import { CustomModal } from "@/src/components";
import {
  FormProvider,
  RHFRadioGroup,
  RHFTextField,
} from "@/src/components/rhf";
import { useGetDonorProfileQuery } from "@/src/services/donor/donor-dashboard/donor-dashboard";
import { useOrderCardMutation } from "@/src/services/donor/setting/setting-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";

export const Schema = (maxQuantity: number, value: string) =>
  Yup.object().shape({
    address:
      value === "currentAddess"
        ? Yup.string().notRequired()
        : Yup.string().required("Address is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .min(1, "Minimum 1 card will be ordered")
      .max(maxQuantity, "Exceeds maximum value"),

    // If this is a boolean, adjust your default value in useForm, otherwise treat as string
    addressValue: Yup.string().required("Address is required"),
  });

function OrderNowCard({ orderNow, setOrderNow, Curreaddress }: any) {
  const { data: donorProfile } = useGetDonorProfileQuery({});
  const [orderCard, { isLoading }] = useOrderCardMutation();
  const [value, setValue] = useState("currentAddess");
  const maxQuantity = donorProfile?.body?.balance / 100;
  console.log(maxQuantity, "maxQuantity", value);
  const methods = useForm<any>({
    resolver: yupResolver(Schema(maxQuantity, value)),
    defaultValues: { addressValue: "currentAddess", address: Curreaddress },
  });

  const { handleSubmit, watch, reset } = methods;
  const addressValues = watch("addressValue");
  useEffect(() => {
    setValue(addressValues);
  }, [addressValues]);

  async function onSubmit(data: any): Promise<any> {
    const { quantity, address } = data;
    const addressValue = address ? address : Curreaddress;
    const body = { address: addressValue, quantity };

    try {
      const response = await orderCard(body).unwrap();
      reset();
      toast.success(response?.message || "card Generate successfully!");
      setOrderNow(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }
  }

  return (
    <CustomModal
      onClose={() => {
        setOrderNow(false);
      }}
      headerLabel="Order Now"
      closeButtonProps={{
        onClick: () => {
          setOrderNow(false);
        },
      }}
      isOpen={orderNow}
      rootSx={{ minWidth: 400, maxWidth: 700 }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} padding={2}>
          <Typography variant="body2" fontWeight={"bold"}>
            Select Order for Address{" "}
          </Typography>
          <Grid item xs={12}>
            <RHFRadioGroup
              name="addressValue"
              row={false}
              options={[
                { label: "Current Address", value: "currentAddess" },
                { label: "Add New Address", value: "addNewAddress" },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ background: "#F0FDFB", p: 2 }}>
              <Typography variant="body2">{Curreaddress}</Typography>
            </Box>
          </Grid>
          {addressValues === "addNewAddress" && (
            <>
              <Grid item xs={6}>
                <RHFTextField
                  name="address"
                  size="small"
                  outerLabel="Add New Address"
                />
              </Grid>

              <Grid item xs={6} />
            </>
          )}
          <Grid item xs={6}>
            <RHFTextField
              name="quantity"
              size="small"
              outerLabel="Add Card Quantity"
              type="number"
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isLoading}
            >
              Confirm Address
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </CustomModal>
  );
}

export default OrderNowCard;
