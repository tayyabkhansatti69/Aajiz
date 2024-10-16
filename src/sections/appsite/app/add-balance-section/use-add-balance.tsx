import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export const UseAddBalance = () => {
  const router = useRouter();

  const methods = useForm<any>({
    // resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    // defaultValues: defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = () => {};
  return {
    methods,
    handleSubmit,
    onSubmit,
    router,
  };
};
