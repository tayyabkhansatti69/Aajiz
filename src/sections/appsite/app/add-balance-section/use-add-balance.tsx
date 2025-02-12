import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAddBalanceMutation } from "@/src/services/donor/donate-now/donate-now-api";
import toast from "react-hot-toast";
import validationSchema from "./validation-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
export const UseAddBalance = () => {
  const router = useRouter();
  const [amountAdd, setAmountAdd] = useState("");
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
  const amountAdded = watch("amount");
  useEffect(() => {
    setAmountAdd(amountAdded);
  }, [amountAdded]);
  const onSubmit = async (data: any): Promise<void> => {
    console.log(data);
    const body = {
      new_balance: data?.amount,
      payment_method: data?.paymentMethod,
      account_num: data?.cardNumber,
      cvc: data?.cvc,
      expire_date: data?.expireDate,
    };
    const loadCardData = {
      phone_number: data?.phoneNumber,
      cnic: data?.cnic,
      new_balance: data?.amount,
      payment_method: data?.paymentMethod,
    };
    try {
      if (paymentMethodType === "card") {
        const res: any = await addBalance(body).unwrap();
        reset();
        router.push("/dashboard");
        toast.success(res?.message ?? `Added Successfully!`);
      } else {
        const res: any = await addBalance(loadCardData).unwrap();
        reset();
        router.push("/dashboard");
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
    amountAdd,
  };
};
