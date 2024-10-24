import {
  useLazyGetAccountQuery,
  useWithdrawAmountMutation,
} from "@/src/services/partner/withdraw-amount/withdraw-amount-api";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const UseWithdrawBalance = ({ setOpenModal }): any => {
  const getAccount = useLazyGetAccountQuery();
  const [withdrawAmount] = useWithdrawAmountMutation();
  const methods = useForm<any>({
    // resolver: yupResolver(validationSchema),
    defaultValues: {
      account: "existing account",
      paymentMethod: null,
      amount: "",
    },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      account_detail: data?.paymentMethod?.id,
      withdraw_amount: data?.amount,
    };
    try {
      const res: any = await withdrawAmount(body).unwrap();
      reset();
      toast.success(res?.message ?? `Account Added Successfully!`);
      setOpenModal(false);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    getAccount,
  };
};
