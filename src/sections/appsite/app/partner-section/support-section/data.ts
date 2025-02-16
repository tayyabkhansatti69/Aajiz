import * as Yup from "yup";

export const data = [
  {
    id: 1,
    question: "How does the donation system work?",
    answer:
      "Donors can contribute funds, which are issued as donation cards. Our verified partners, including restaurants, pharmacies, and grocery stores, can scan these cards and provide essential items to those in need. This ensures that donations directly help beneficiaries in a meaningful way",
  },
  {
    id: 2,
    question: "How can partners withdraw their funds?",
    answer:
      "Partners can request a withdrawal of their collected donation funds through their dashboard. Once the request is submitted, our admin team will review and approve it. The processing time may vary, but we ensure a smooth and secure transfer of funds to the registered partner’s account.",
  },
  {
    id: 3,
    question: "How can I become a verified partner?",
    answer:
      "To become a partner, you need to submit your business details, including your registration information, location, and type of services (restaurant, pharmacy, grocery, etc.). Once verified, you will receive access to scan donation cards and serve beneficiaries. Our team ensures a quick verification process to get you onboarded efficiently.",
  },
];
export const validationSchema = Yup.object().shape({
  subject: Yup.string().required(" Subject is required"),
  description: Yup.string().required(" Description is required"),
});
