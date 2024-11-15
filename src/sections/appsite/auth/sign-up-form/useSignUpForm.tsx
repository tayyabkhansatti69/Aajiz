import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { setLocalStorage } from '@/src/components/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSignUpMutation } from '@/src/services/auth-api';
import toast from 'react-hot-toast';

// Yup schema with password confirmation validation
export const Schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    account_type: Yup.string().required('Account Type is required'),
    rememberMe: Yup.boolean().required('Terms and Conditions must be accepted'),
});
// Default values
export const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    account_type: '',
    rememberMe: false,
};

// Custom hook
export const UseSignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [postSignUp,{isLoading}] = useSignUpMutation();
    const router = useRouter();
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
        const { name, email, password, account_type } = data;

        try {
            // Perform signup mutation using RTK Query
            const response = await postSignUp({
                name,
                email,
                password,
                account_type,
            }).unwrap();

            setLocalStorage('rememberMe', response?.body);
            toast.success(response?.message || "Signed up successfully!");

            // Redirect after successful signup
            router.push('/otp-verification');
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
        isLoading,
        handleClickShowPassword1,
        showPassword1
    };
};
