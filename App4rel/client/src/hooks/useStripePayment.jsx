import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../makeRequest";

const useStripePayment = () => {
  const [stripePromise] = useState(() =>
    loadStripe(
      "pk_test_51OHQ9UDB4caJs4xBKyco3nkoIMVhLe4LwTjH95eZRoKu6XNw92yJUpA3lAs1USDVFknlkS2k4B8dSJqDQPLehCsM00u9L0j8Kl"
    )
  );
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async (cart) => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

      if (res.data.success) {
        console.log("Payment successful");
      }
    } catch (error) {
      console.error(error.response.data);
      setPaymentError(error.response.data); // Set the payment error state
    }
  };

  return {
    handlePayment,
    paymentError,
  };
};

export default useStripePayment;
