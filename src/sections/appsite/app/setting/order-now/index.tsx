
import { CustomModal } from "@/src/components";
import { FormProvider } from "@/src/components/rhf";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";



function OrderNowCard({ orderNow, setOrderNow }: any) {
  const methods = useForm<any>({
    // resolver: yupResolver(schema),
    // defaultValues: {},
  });

  const {
    handleSubmit,
  } = methods;

  const onSubmit = (data:any) => {
    console.log(data, "data");
  };

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
        <Box>

        </Box>
      </FormProvider>
    </CustomModal>
  );
}

export default OrderNowCard;
