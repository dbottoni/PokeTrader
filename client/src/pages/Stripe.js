import React from "react";
import ReactDOM from 'react-dom';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
          "pk_test_51Jjp0ZGSMAd7MIHGemJUH9wgAOsy2cAHV2xPwqpTZmTlJn3VxnNDlgPftS4eH7OIzrKZfIA0fIYf9NEJsRSIJKD100dHuxsupy"
);


 function Stripe() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'prod_KUFtuErE2L3iuB', // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (

    <div>
    <div className="m-6">
      <h2 className="content has-text-centered">Thank you for considering a $5 donation!</h2>
      <p className="content has-text-centered">
        Your donation will be used towards the future improvement of the Pocket Traders Platform
      </p> 
      <p className="content has-text-centered">
          By clicking "Donate Now!" you will be re-routed to an external site for payment processing
        </p> 
    </div>
    
    <span className="card-footer">
     <a href="https://buy.stripe.com/test_6oE5m54YZ4OM5igbII"
     role="link"
      className="card-footer-item"
      onClick={handleClick}
      target="_blank"
      >
      Donate Now! 
    </a>
    </span>

    </div>
  );
}

export default Stripe;
