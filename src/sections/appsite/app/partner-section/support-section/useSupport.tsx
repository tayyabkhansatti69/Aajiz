import { useSupportMutation } from "@/src/services/partner/support/support-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { validationSchema } from "./data";

export const UseSupport = () => {
  const [postQuery,{isLoading}] = useSupportMutation();

  const methods = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      subject: "",
      description: "",
      media:""
    },
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = async (data: any): Promise<void> => {
    const formData = new FormData();
    formData.append("subject", data?.subject);
    formData.append("message", data?.description);
    formData.append("media", data?.media);

    try {
      const res: any = await postQuery(formData).unwrap();
      reset({});
      toast.success(res?.message ?? `Query Submitted Successfully!`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      toast.error(errMsg ?? "Something Went Wrong!");
    }
  };
  return { methods, handleSubmit, onSubmit,isLoading };
};
