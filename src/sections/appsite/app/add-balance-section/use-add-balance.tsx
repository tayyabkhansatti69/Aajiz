import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAddBalanceMutation } from "@/src/services/donor/donate-now/donate-now-api";
import toast from "react-hot-toast";
import validationSchema from "./validation-schema";
import { yupResolver } from "@hookform/resolvers/yup";
export const UseAddBalance = () => {
  const router = useRouter();

  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      paymentMethod: "jazzCash",
      amount: "",
      cardNumber: "",
      cvc: "",
      expireDate: "",
      cnic: "",
      phoneNumber: "",
    },
  });
  const { handleSubmit, watch, reset } = methods;
  const [addBalance] = useAddBalanceMutation();
  const paymentMethodType = watch("paymentMethod");

  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      amount: data?.amount,
      stamp_price: data?.cardAmount,
      industry_id: data?.industryType?.id,
    };
    const loadCardData = {
      card_num: data?.cardNo,
      industry_id: data?.industryType?.id,
      donation_amount: data?.amount,
    };
    try {
      if (paymentMethodType === "card") {
        const res: any = await addBalance(body).unwrap();
        reset();
        // router.push("candidates");
        toast.success(res?.message ?? `Added Successfully!`);
      } else {
        const res: any = await addBalance(loadCardData).unwrap();
        reset();
        router.push("/donor-dashboard");
        toast.success(res?.message ?? `Donated Successfully!`);
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
    paymentMethodType,
  };
};
