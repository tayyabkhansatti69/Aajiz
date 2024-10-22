import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { setLocalStorage } from '@/src/components/utils';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/src/services/auth-api';
// import { removeLocalStorage } from '@/src/utils';
import toast from 'react-hot-toast';
// import { useState } from 'react';


// Yup schema
export const Schema = Yup.object().shape({
  username : Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(3, 'Password must be at least 8 characters long').required('Password is required'),
});

// Default values
export const defaultValues = {
  username : "",
  password: "",
};

// Custom hook
export const UseSignInForm = () => {
  const [loginPost]=useLoginMutation()
  
const router=useRouter()
    const methods = useForm<any>({
    resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  

  async function onSubmit(data: any): Promise<any> {
    const { username, password } = data;
  
    // Save the 'remember me' data to local storage

  
    try {
      const credentials = new URLSearchParams(); // Ensure form data is sent correctly
      credentials.append("username", username);
      credentials.append("password", password);
  
      // Perform login mutation using RTK Query
      const respsone = await loginPost(credentials).unwrap();
      console.log(respsone,"lklkkk")
      setLocalStorage('rememberMe', respsone);
      
      toast.success(respsone?.message || "Sign in successfully!");
  
      // Role-based redirection logic
      switch (respsone?.Data_User?.account_type) {
        case "donor":
          router.push("/dashboard");
          break;
        case "student":
          router.push("/dashboard/student");
          break;
        case "admin":
          router.push("/dashboard/admin");
          break;
        default:
          null
          break;
      }
    } catch (error: any) {
      console.error(error);
  
        toast.error(error?.data?.message || "Something went wrong!");
      
    }
  }
  

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
