import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useState, useEffect } from "react";
import closeBtn from "../assets/CloseBtn.svg";
import CheckoutForm from "./CheckoutForm";
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store';
import "./Card.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const stripePromise = loadStripe(
  "pk_test_51P2lpQC9Zd6I2Ms1GoO6Yk32LekVgzJldgAwfLNHZd8sx6B3BF3pmZgLC5FbXB6Q98iihfn0V7v36W3daHy3NZ2q00ibIvyS1N"
);

const CardModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  const [clientSecret, setClientSecret] = useState("");
  const totalPayAmount = useAppSelector((state: RootState) => state.pay.totalPayAmount);
  console.log(totalPayAmount);


  useEffect(() => {
    if (isOpen) {
      // Create PaymentIntent as soon as the page loads
      fetch(`${process.env.BACKEND_URL}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: totalPayAmount }] }),
      })
        .then((res) => {
          console.log("Result: ", res);
          return res.json();
        })
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isOpen, totalPayAmount]); // Add isOpen as a dependency to useEffect if needed

  if (!isOpen) return null;

  type AppearanceTheme = "stripe" | "night" | "flat" | "none";
  type AppearanceVariables = {
    colorPrimary: string;
    colorBackground: string;
    colorText: string;
  };

  type Appearance = {
    theme: AppearanceTheme;
    variables: AppearanceVariables;
  };

  const appearance: Appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#2687e8",
      colorBackground: "#FFFAF9",
      colorText: "#091C62",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white rounded-lg border-solid border-0 border-[#FA551D] relative p-10 m-10"
        style={{ transition: "transform 3s", transform: "scale(1)" }}
      >
        <button
          onClick={onClose}
          className="absolute right-[30px] top-[30px] w-[36px]"
        >
          <img className="close-btn" src={closeBtn} alt="close"></img>
        </button>
        <p className="text-[#FA551D] text-[28px] font-bold text-center my-4">
          Card Pay
        </p>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
        <div className="parking-footer flex flex-col self-center ">
          <div className="text-1xl mt-6">
            Powered by <a href="https://stripe.com/"><strong>Stripe</strong></a>
          </div>
          <div className="footer-link flex self-center">
            <a href="https://stripe.com/legal/end-users" className="text-1xl text-[#091C62] mx-2 underline my-1">
              Terms
            </a>
            <a href="https://stripe.com/privacy" className="text-1xl text-[#091C62] mx-2 underline my-1">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
