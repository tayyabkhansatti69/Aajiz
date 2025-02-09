import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetCampaignsByIDQuery, useGetDonorProfileQuery } from "@/src/services/donor/donor-dashboard/donor-dashboard";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAddDonationMutation } from "@/src/services/donor/donate-now/donate-now-api";
import toast from "react-hot-toast";

export const Schema = (data) => {
  return Yup.object().shape({
    amount: Yup.number()
      .transform((value, originalValue) => {
        // Convert empty string to `undefined` so Yup can apply `required`
        return originalValue === "" ? undefined : value;
      })
      .required("Amount is required")
      .max(data?.current_balance, "Maximum amount cannot be greater than your balance")
      .min(1, "Minimum Amount is required"),
  });
};

export const UseCampaignDonation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const {data,isLoading:donorDataLoading}=useGetCampaignsByIDQuery({id})
  const { data: donorProfile } = useGetDonorProfileQuery({});
  const [addDonation,{isLoading}]=useAddDonationMutation()
  const campaignData=data?.body;
  const methods = useForm<any>({
    resolver: yupResolver(Schema(donorProfile?.body)),
      defaultValues: {
      amount:0,
      },
  });
  const { handleSubmit } = methods;
  const onSubmit =async (data:any) => {
    const body={
      amount: data?.amount,
      campaign_id: id
    } 
    try {
    const response = await addDonation(body).unwrap();
    toast.success(
      response?.message ||
        "Thanks for donation!!",
    );

    router?.push("/dashboard");
  } catch (error: any) {
    console.error(error);
    toast.error(error?.data?.message || "Something went wrong!");
  }

  };
  return {
    methods,
    handleSubmit,
    onSubmit,
    router,
    campaignData,
    donorProfile,
    isLoading,
    donorDataLoading
  };
};
