import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useChangePasswordMutation } from '@/src/services/auth-api';
import toast from 'react-hot-toast';


// Yup schema
export const Schema = Yup.object().shape({

    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

// Default values
export const defaultValues = {

    password: "",
    confirmPassword: "",

};

// Custom hook
export const UseRegisterForm = () => {
    const searchParams = useSearchParams();
    const [chnagePassword] = useChangePasswordMutation()
    const email = searchParams.get('email');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const router = useRouter()
    const methods = useForm<any>({
        resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
        defaultValues: defaultValues,
    });


    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const handleClickShowPassword1 = () => {
        setShowPassword1((prev) => !prev);
    };
    const { handleSubmit } = methods;
    const onSubmit = async (data: any) => {
        const { password } = data;

        try {
            // Perform signup mutation using RTK Query
            const response = await chnagePassword({
                email,
                password,
            }).unwrap();

            toast.success(response?.message || "Signed up successfully!");
            router.push("/sign-in");
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || "Something went wrong!");
        }



    };

    return {
        methods,
        handleSubmit,
        onSubmit,
        handleClickShowPassword,
        showPassword,
        handleClickShowPassword1,
        showPassword1 
    };
};
