import { useForm } from "react-hook-form";

export const UseWithdrawBalance = () => {
    const methods = useForm<any>({
        // resolver: yupResolver(validationSchema),
        defaultValues: {
            account: "existing account",
            paymentMethod: "jazzcash",
            industryType: null,
            cardAmount: "accountNumber",
            amount: "",
        },
    });
    const { handleSubmit, } = methods;
    const onSubmit = async (): Promise<void> => { }
    return {
        methods,
        handleSubmit,
        onSubmit,

    };
}