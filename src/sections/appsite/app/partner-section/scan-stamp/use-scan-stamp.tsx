import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const UseScanStamp = () => {
    const router = useRouter();

    const methods = useForm<any>({
        // resolver: yupResolver(validationSchema),
        defaultValues: {
            stampType: "",
            cardNumber: "",
            video: "",
        },
    });
    const { handleSubmit, } = methods;
    const onSubmit = async (): Promise<void> => { }
    return {
        methods,
        handleSubmit,
        onSubmit,
        router
    };
}