import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { setLocalStorage } from '@/src/components/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// Yup schema
export const Schema = Yup.object().shape({
    fullName:Yup.string().required('Email is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(3, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string().min(3, 'Confirm Password must be at least 8 characters long').required('Confirm Password is required'),
    remeberMe:Yup?.boolean()?.required('Term and Condition is requird')
});

// Default values
export const defaultValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    remeberMe:false,
};

// Custom hook
export const UseSignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter()
    const methods = useForm<any>({
        resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
        defaultValues: defaultValues,
    });


    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const { handleSubmit } = methods;
    const onSubmit = (data: any) => {

        setLocalStorage('rememberMe', data)
        if (data?.email === "teacher@gmail.com" && data?.password === '123') {
            router.push("/dashboard");
        } else if (data?.email === "student@gmail.com" && data?.password === '123') {
            router.push("/dashboard");
        } else if (data?.email === "admine@gmail.com" && data?.password === '123') {
            router.push("/dashboard");
        } else {
            null
        }
    };

    return {
        methods,
        handleSubmit,
        onSubmit,
        handleClickShowPassword,
        showPassword
    };
};
