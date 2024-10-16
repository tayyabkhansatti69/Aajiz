import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { useRouter } from 'next/navigation';


// Yup schema
export const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
 
});

// Default values
export const defaultValues = {
  email: "",
  password: "",
};

// Custom hook
export const UseForgetYourForm = () => {
const router=useRouter()
    const methods = useForm<any>({
    resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = () => {
      router.push("/reset-password");
    
   };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
