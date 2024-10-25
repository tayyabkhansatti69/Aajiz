import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAddAccountMutation } from "@/src/services/partner/add-account/add-account-api";
import toast from "react-hot-toast";

export const UseAddAccount = () => {
  const router = useRouter();
  const [addAccount] = useAddAccountMutation();
  const methods = useForm<any>({
    // resolver: yupResolver(validationSchema),
    defaultValues: {
      paymentOption: "jazzcash",
      bank: "",
      accountTitle: "",
      bankAccountNumber: "",
      phoneNumber: "",
    },
  });
  const { handleSubmit, watch, reset } = methods;
  const paymentOption = watch("paymentOption");
  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      account_name: data?.bank,
      account_title: data?.accountTitle,
      account_num: data?.bankAccountNumber,
    };
    const loadCardData = {
      account_name: data?.paymentOption,
      account_title: data?.accountTitle,
      account_num: data?.phoneNumber,
    };
    try {
      if (paymentOption === "bank") {
        const res: any = await addAccount(body).unwrap();
        reset();
        toast.success(res?.message ?? `Account Added Successfully!`);
        router.push("/dashboard");
      } else {
        const res: any = await addAccount(loadCardData).unwrap();
        reset();
        router.push("/dashboard");
        toast.success(res?.message ?? `Account Added Successfully!`);
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    router,
    paymentOption,
  };
};
