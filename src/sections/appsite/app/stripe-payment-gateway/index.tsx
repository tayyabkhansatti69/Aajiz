"use client";

import convertToSubCurrency from "@/lib/convertToSubcurrency";
import { Button } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [amount]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false)
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      }
    });
    if (error) {
      setErrorMessage(error.message)
    }
    else {

    }
    setLoading(false)
  }
  if (!clientSecret || !stripe || !elements) {
    <p>...loading</p>
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem' }}>
      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}
      <Button variant="contained" sx={{ mt: 3 }} disabled={!stripe || loading} type="submit">
        {!loading ? `Pay ${amount}` : 'Processing...'}
      </Button>
    </form>
  );
};

export default CheckoutPage;
