import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  paymentOption: Yup.string()
    .oneOf(["jazzcash", "easypaisa", "bank"], "Invalid payment option")
    .required("Payment option is required"),

  bank: Yup.string().when("paymentOption", {
    is: "bank",
    then: (schema) =>
      schema
        .required("Bank name is required")
        .matches(
          /^[A-Za-z\s]+$/,
          "Account title can only contain letters and spaces"
        ),
    otherwise: (schema) => schema.notRequired(),
  }),

  bankAccountNumber: Yup.string().when("paymentOption", {
    is: "bank",
    then: (schema) =>
      schema
        .required("Bank account number is required")
        .matches(/^\d+$/, "Phone number must contain only numbers"),
    otherwise: (schema) => schema.notRequired(),
  }),

  phoneNumber: Yup.string().when("paymentOption", {
    is: (value) => value === "jazzcash" || value === "easypaisa",
    then: (schema) =>
      schema
        .required("Phone number is required")
        .matches(/^\d+$/, "Phone number must contain only numbers")
        .length(11, "Phone number must be exactly 11 digits"),
    otherwise: (schema) => schema.notRequired(),
  }),
  accountTitle: Yup.string()
    .required("Account title is required")
    .matches(
      /^[A-Za-z\s]+$/,
      "Account title can only contain letters and spaces"
    ),
});

export default validationSchema;
