import {
  useLazyGetAccountQuery,
  useWithdrawAmountMutation,
} from "@/src/services/partner/withdraw-amount/withdraw-amount-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  account: Yup.string().required("Account is required"),
  // paymentMethod: Yup.string().required("Payment method is required"),
  amount: Yup.number()
    .required("Amount is required")
    .typeError("Amount must be a number"),
});
export const UseWithdrawBalance = ({ setOpenModal }): any => {
  const router = useRouter();

  const getAccount = useLazyGetAccountQuery();
  const [withdrawAmount] = useWithdrawAmountMutation();
  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      account: "existing account",
      paymentMethod: null,
      amount: "",
    },
  });
  const { handleSubmit, reset, watch } = methods;
  const accountType = watch("account");
  useEffect(() => {
    if (accountType === "add new account") {
      router.push("/add-account");
    }
  }, [accountType]);
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
