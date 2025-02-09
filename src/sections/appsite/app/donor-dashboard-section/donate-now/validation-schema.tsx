import * as Yup from "yup";

// Define the validation schema
const validationSchema = Yup.object().shape({
  // amount: Yup.string().required("Amount is required"),
  amount: Yup.string()
    .required("Amount is required")
    .test(
      "min-amount",
      "Amount must be at least 100",
      (value) => !isNaN(Number(value)) && Number(value) >= 100
    ),

  type: Yup.string()
    .oneOf(["eStamp", "physicalCard"], "Invalid type")
    .required("Type is required"),

  industryType: Yup.object()
    .nullable() // Adjust according to whether this should be required or not

    // If there are specific properties that need validation, you can define them here.
    .required("Industry type is required"),

  // cardAmount: Yup.string().when("type", {
  //   is: "eStamp",
  //   then: (schema) => schema.required("Card amount is required"),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
  cardAmount: Yup.string().when("type", {
    is: "eStamp",
    then: (schema) =>
      schema
        .required("Card amount is required")
        .test(
          "min-amount",
          "Card amount must be at least 100",
          (value) => !isNaN(Number(value)) && Number(value) >= 100
        ),
    otherwise: (schema) => schema.notRequired(),
  }),

  cardNo: Yup.string().when("type", {
    is: "physicalCard",
    then: (schema) => schema.required("Card number is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default validationSchema;
