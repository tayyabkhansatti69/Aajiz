import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  useScanCardMutation,
  useScanEStampMutation,
} from "@/src/services/partner/scan-stamp/scan-stamp-api";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  stampType: Yup.string().required("Stamp type is required"),
  cardNumber: Yup.string().required("Card number is required"),
  amount: Yup.string().required("Amount is required"),
});

export const UseScanStamp = () => {
  const router = useRouter();
  const [scanCard] = useScanCardMutation();
  const [scanEStamp] = useScanEStampMutation();
  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      stampType: "eStamp",
      cardNumber: "",
      amount: "",
    },
  });
  const { handleSubmit, watch, reset } = methods;
  const type = watch("stampType");
  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      card_num: data?.cardNumber,
      amount_to_deduct: data?.amount,
    };
    const loadCardData = {
      card_num: data?.cardNumber,
      amount_to_deduct: data?.amount,
    };
    try {
      if (type === "eStamp") {
        const res: any = await scanEStamp(body).unwrap();
        toast.success(res?.message ?? `Stamp Scanned Successfully!`);
        reset();
        router.push("/dashboard");
      } else if (type === "physicalCard") {
        const res: any = await scanCard(loadCardData).unwrap();
        toast.success(res?.message ?? `Stamp Scanned Successfully!`);
        reset();
        router.push("/dashboard");
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
  };
};
