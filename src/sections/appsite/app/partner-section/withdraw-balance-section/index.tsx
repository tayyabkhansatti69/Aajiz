import { CustomModal } from "@/src/components";
import {
  FormProvider,
  RHFAutocompleteAsync,
  RHFRadioGroup,
  RHFTextField,
} from "@/src/components/rhf";
import { Button, Stack } from "@mui/material";
import { UseWithdrawBalance } from "./use-withdraw-balance";

export function WithdrawBalanceSection({ openModal, setOpenModal }: any) {
  const { methods, handleSubmit, onSubmit, getAccount } = UseWithdrawBalance({
    setOpenModal,
  });
  return (
    <CustomModal
      isOpen={openModal}
      closeButtonProps={{
        onClick: () => {
          setOpenModal(false);
        },
      }}
      onClose={() => {
        setOpenModal(false);
      }}
      rootSx={{ width: "50%" }}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} width="50%" px={5} pb={3}>
          <RHFRadioGroup
            name="account"
            outerLabel="Select Account"
            row={false}
            options={[
              { id: 1, value: "existing account", label: "Existing Account" },
              { id: 2, value: "add new account", label: "Add New Account" },
            ]}
          />

          <RHFAutocompleteAsync
            name="paymentMethod"
            outerLabel="Select Payment Method"
            apiQuery={getAccount}
            transformResponse={(res) => res?.body}
            getOptionLabel={(option: any) => option.account_name}
          />
          <RHFTextField name="amount" outerLabel="Amount" />
          <Button variant="contained" type="submit">
            Withdraw
          </Button>
        </Stack>
      </FormProvider>
    </CustomModal>
  );
}
