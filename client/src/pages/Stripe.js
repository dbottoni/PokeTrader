import React from "react";
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
          "pk_test_51Jjp0ZGSMAd7MIHGemJUH9wgAOsy2cAHV2xPwqpTZmTlJn3VxnNDlgPftS4eH7OIzrKZfIA0fIYf9NEJsRSIJKD100dHuxsupy"
    );

  const Stripe = ({ itemID, amount }) => {


    const handleClick = async (event) => {
      const stripe = await stripePromise;
      stripe
        .redirectToCheckout({
          lineItems: [{ price: itemID, quantity: 1 }],
          mode: "payment",
          successUrl: window.location.protocol + "//localpdf.tech/merge",
          cancelUrl: window.location.protocol + "//localpdf.tech/merge",
          submitType: "donate",
        })
        .then(function (result) {
          if (result.error) {
            console.log(result);
          }
        });
    };

    return (
      <p>Donate to us</p>
      // <button
      //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      //   onClick={handleClick}
      // >
      //   Donate '$'{amount}
      // </button>
    );
  };
 



export default Stripe;