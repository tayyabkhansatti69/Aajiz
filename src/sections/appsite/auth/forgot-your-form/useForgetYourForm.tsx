import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { useRouter } from 'next/navigation';
import { useForgotPasswordMutation } from '@/src/services/auth-api';
import { setLocalStorage } from '@/src/utils';
import toast from 'react-hot-toast';


// Yup schema
export const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),

});

// Default values
export const defaultValues = {
  email: "",

};

// Custom hook
export const UseForgetYourForm = () => {
  const [forgetP0st] = useForgotPasswordMutation()
  const router = useRouter()
  const methods = useForm<any>({
    resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = async (data: any) => {
    const { email } = data
    try {
      // Perform signup mutation using RTK Query
      const response = await forgetP0st({
        email
      }).unwrap();

      setLocalStorage('rememberMe', response?.body);
      toast.success(response?.message || "opt send on email successfully!");
      router.push(`/otp-verification?type=forget&&email=${email}`);
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong!");
    }


  };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
