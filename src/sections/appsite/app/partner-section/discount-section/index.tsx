import { FormProvider, RHFCustomSelect } from "@/src/components/rhf";
import { useManageDiscountMutation } from "@/src/services/partner/discount/discount-api";
import { LoadingButton } from "@mui/lab";
import { Stack, Typography, Grid2 as Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function DiscountSection({ enable, setEnable }: any) {
  const [updateDiscount, { isLoading }] = useManageDiscountMutation();
  const methods = useForm<any>({
    defaultValues: {
      updateDiscount: 5,
    },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      discount: data?.updateDiscount,
    };
    try {
      const res: any = await updateDiscount(body).unwrap();
      setEnable(true);
      reset();
      toast.success(res?.message ?? `Discount Updated Successfully!`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid size={{ sm: 6, xs: 12 }}>
          <Stack rowGap={3}>
            <Typography variant="body1" fontWeight="bold">
              Update Discount
            </Typography>
            <RHFCustomSelect
              name="updateDiscount"
              options={[
                { id: 1, label: "5 %", value: 5 },
                { id: 2, label: "10 %", value: 10 },
                { id: 3, label: "15 %", value: 15 },
                { id: 4, label: "20 %", value: 20 },
              ]}
              disabled={enable}
            />
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
              disabled={enable}
              sx={{ width: { md: 300, xs: "auto" } }}
            >
              Update Discount
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
