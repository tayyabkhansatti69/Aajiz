import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  useDonateNowMutation,
  useLazyGetIndustryTypeDropdownListQuery,
  useLoadCardMutation,
} from "@/src/services/donor/donate-now/donate-now-api";
import toast from "react-hot-toast";
import { useState } from "react";
import validationSchema from "./validation-schema";
import { yupResolver } from "@hookform/resolvers/yup";
export const UseDonateNow = () => {
  const [selectedType, setSelectedType] = useState("eStamp");
  const [eStamp, setEStamp] = useState(true);
  const [eStampData, setEStampData] = useState();

  const router = useRouter();

  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      amount: "",
      type: selectedType,
      industryType: null,
      cardAmount: "",
      cardNo: "",
    },
  });
  const industryTypeDropdownList = useLazyGetIndustryTypeDropdownListQuery();
  const [donateNow, { isLoading }] = useDonateNowMutation();
  const [loadCard, { isLoading: loadCardLoading }] = useLoadCardMutation();
  const { handleSubmit, reset, watch, setValue } = methods;
  const stampType = watch("type");

  const handleSelect = (type) => {
    setSelectedType(type);
    setValue("type", type);
  };

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
      if (stampType === "eStamp") {
        const res: any = await donateNow(body).unwrap();
        reset();
        toast.success(res?.message ?? `Donated Successfully!`);
        setEStampData(res);
        setEStamp(false);
      } else {
        const res: any = await loadCard(loadCardData).unwrap();
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
    stampType,
    isLoading,
    loadCardLoading,
    industryTypeDropdownList,
    eStamp,
    setEStamp,
    eStampData,
    setValue,
    selectedType,
    setSelectedType,
    handleSelect,
  };
};
