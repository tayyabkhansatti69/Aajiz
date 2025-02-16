import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  subject: Yup.string().required(" Subject is required"),
  reason: Yup.string().required(" Reason is required"),
  description: Yup.string().required(" Description is required"),
});
