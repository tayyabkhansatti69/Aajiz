import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  // Import the resolver
import { setLocalStorage } from '@/src/components/utils';
import { useRouter } from 'next/navigation';


// Yup schema
export const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(3, 'Password must be at least 8 characters long').required('Password is required'),
});

// Default values
export const defaultValues = {
  email: "",
  password: "",
};

// Custom hook
export const UseSignInForm = () => {
const router=useRouter()
    const methods = useForm<any>({
    resolver: yupResolver(Schema),  // Pass Yup schema to the resolver
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data:any) => {

    setLocalStorage('rememberMe',data)
    if(data?.email==="teacher@gmail.com"&& data?.password==='123')
    {
      router.push("/dashboard");
    }else if(data?.email==="student@gmail.com"&& data?.password==='123')
    {
    router.push("/dashboard");
    }else if(data?.email==="admine@gmail.com"&& data?.password==='123')
      {
      router.push("/dashboard");
      }else
      {
        null
      }
   };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
