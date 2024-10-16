import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// Yup schema
export const Schema = Yup.object().shape({

    password: Yup.string().min(3, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string().min(3, 'Confirm Password must be at least 8 characters long').required('Confirm Password is required'),

});

// Default values
export const defaultValues = {
    
    password: "",
    confirmPassword: "",
    
};

// Custom hook
export const UseRegisterForm = () => {
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
    const onSubmit = () => {

   
            router.push("/sign-in");
     
    };

    return {
        methods,
        handleSubmit,
        onSubmit,
        handleClickShowPassword,
        showPassword
    };
};
