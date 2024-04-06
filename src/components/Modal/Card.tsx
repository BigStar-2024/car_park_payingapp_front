import React from "react";
import closeBtn from "../assets/CloseBtn.svg";
import CountrySelectLabels from "../Country";
import Visa from "../assets/Visa.svg";
import Amex from "../assets/AMEX.svg";
import Diner from "../assets/Diner.svg";
import Master from "../assets/Master.svg";
import Discover from "../assets/Discover.svg";
import Button from "@mui/material/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CardModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white rounded-lg border-solid border-0 border-[#FA551D] relative p-10"
        style={{ transition: "transform 3s", transform: "scale(1)" }}
      >
        {/* Add your detailed content here */}
        <button
          onClick={onClose}
          className="absolute right-[30px] top-[30px] w-[36px]"
        >
          <img className="close-btn" src={closeBtn}></img>
        </button>
        <p className="text-[#FA551D] text-[28px] font-bold text-center">Card</p>
        <div className="flex flex-col mt-4">
          <div className="text-[#091C62] p-1 text-left text-2xl">
            Country or Region
          </div>
          <CountrySelectLabels />
        </div>
        <div className="flex flex-col mt-4">
          <div className="text-[#091C62] p-1 text-left text-2xl">
            Card Information
          </div>
          <form className="email my-1" action="/action_page.php">
            <input
              type="text"
              className="input-placeholder"
              placeholder="Name on card"
              name="Name on card"
            ></input>
          </form>
          <form className="card my-2 flex relative" action="/action_page.php">
            <input
              type="text"
              className="input-placeholder"
              placeholder="0000 0000 0000 0000"
              name="Card Number"
            ></input>
            <div className="flex absolute right-2 self-center justify-items-center">
              <img
                className="mx-1"
                src={Visa}
                alt="Visa"
                style={{ width: 36, height: 36 }}
              ></img>
              <img
                className="mx-1"
                src={Diner}
                alt="Amex"
                style={{ width: 36, height: 36 }}
              ></img>
              <img
                className="mx-1"
                src={Amex}
                alt="Amex"
                style={{ width: 36, height: 36 }}
              ></img>
              <img
                className="mx-1"
                src={Discover}
                alt="Amex"
                style={{ width: 36, height: 36 }}
              ></img>
              <img
                className="mx-1"
                src={Master}
                alt="Amex"
                style={{ width: 36, height: 36 }}
              ></img>
            </div>
          </form>
          <div className="flex justify-between">
            <form className="email mt-1 mr-2" action="/action_page.php">
              <input
                type="text"
                className="input-placeholder"
                placeholder="MM/YY"
                name="Date"
              ></input>
            </form>
            <form className="email mt-1 ml-2" action="/action_page.php">
              <input
                type="text"
                className="input-placeholder"
                placeholder="CVC"
                name="CVC"
              ></input>
            </form>
          </div>
          <div className="mt-8 text-white w-full">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FA551D",
                "&:hover": {
                  backgroundColor: "#FA551D", // Optional: Changes the background color on hover to a darker red
                },
                color: "white",
                fontSize: "24px",
                borderRadius: "10px",
              }}
              // className="btn w-full p-2.5 rounded-[20px]"
            >
              Pay Now
            </Button>
          </div>
          <div className="parking-footer flex flex-col self-center ">
            <div className="text-1xl mt-12">
              Powered by <strong>Stripe</strong>
            </div>
            <div className="footer-link flex self-center">
              <a
                href="/"
                className="text-1xl text-[#091C62] mx-2 underline my-1"
              >
                Terms
              </a>
              <a
                href="/"
                className="text-1xl text-[#091C62] mx-2 underline my-1"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
