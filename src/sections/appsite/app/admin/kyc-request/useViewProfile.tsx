import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema } from "./data";
import {
  useGetProfileDetailQuery,
  useSendQueryMutation,
} from "@/src/services/admin/kyc-requests/kyc-requests-api";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export const UseViewProfile = () => {
  const { back } = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data } = useGetProfileDetailQuery(id, { skip: !id });

  const [sendQuery, { isLoading }] = useSendQueryMutation();

  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      subject: "",
      reason: "",
      description: "",
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any): Promise<void> => {
    const body = {
      user_id: id,
      subject: data?.subject,
      reason: data?.reason,
      message: data?.description,
    };

    try {
      const res: any = await sendQuery(body).unwrap();
      reset({});
      toast.success(res?.message ?? `Query Submitted Successfully!`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return { methods, handleSubmit, onSubmit, isLoading, data, back,id };
};
