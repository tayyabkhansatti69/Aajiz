import * as Yup from "yup";

// Define a type for your form data

// Define the validation schema
const validationSchema = Yup.object().shape({
  paymentMethod: Yup.string()
    .required("Payment method is required")
    .oneOf(["card", "easypaisa", "jazzcash"], "Invalid payment method"),

  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number")
    .typeError("Amount must be a number"),

  cardNumber: Yup.string().when("paymentMethod", {
    is: (value: any) => value === "card",
    then: (schema: any) => schema?.required("Card number is required"),
    otherwise: (schema) => schema?.notRequired(),
  }),

  cvc: Yup.string().when("paymentMethod", {
    is: (value: any) => value === "card",
    then: (schema: any) => schema?.required("CVC is required"),
    otherwise: (schema) => schema?.notRequired(),
  }),

  expireDate: Yup.string().when("paymentMethod", {
    is: (value: any) => value === "card",
    then: (schema: any) => schema?.required("Expire date is required"),
    otherwise: (schema) => schema?.notRequired(),
  }),

  cnic: Yup.string().when("paymentMethod", {
    is: (value: any) => value === "easypaisa" || value === "jazzCash",
    then: (schema: any) => schema?.required("CNIC is required"),
    otherwise: (schema) => schema?.notRequired(),
  }),

  phoneNumber: Yup.string().when("paymentMethod", {
    is: (value: any) => value === "easypaisa" || value === "jazzCash",
    then: (schema: any) => schema?.required("Phone number is required"),
    otherwise: (schema) => schema?.notRequired(),
  }),
});

export default validationSchema;
