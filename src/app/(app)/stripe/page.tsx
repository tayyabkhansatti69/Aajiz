"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Box } from "@mui/material";
import convertToSubCurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/src/sections/appsite/app/stripe-payment-gateway";


if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Stripe() {
  const amount = 49.99;

  return (
    <Box
      sx={{
        px: 5,
        
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(#0b767a,#09a4a8,#09a4a8, #0b767a)",
        height: "100vh",
        border: "1px solid cyan",
        borderRadius:'32px',
      }}
    >
      
      <Box
        sx={{
          width: "50%",
           border: "1px solid #cafdf8",
           p: 4,
          mt: 2,
          borderRadius: 5,
          mx: "auto",
        }}
      >
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubCurrency(amount), //cents
            currency: "usd",
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </Box>
    </Box>
  );
}
