import React from "react";
import "./index.css";
import { useState } from "react";
import ViewDetailModal from "./Modal/ViewDetail";
import CardModal from "./Modal/Card";
import CashModal from "./Modal/Cash";
import AppleModal from "./Modal/Apple";
import Apple from './assets/Apple.svg'
// import CreditCard from "./assets/PaymentCard.svg"

const Paying = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
    setIsModalOpen2(false);
    setIsModalOpen3(false);
  };

  return (
    <div className="payment w-full flex flex-col">
      <div className="flex flex-col mt-3 bg-[#FFF2EE] rounded-[10px] p-5 items-center w-full">
        <p className="text-2xl font-bold text-[#091C62]">
          Pay Vanguard Parking Solutions Inc.
        </p>
        <div className="text-[36px] text-[#091C62] mt-4">$16.48</div>
      </div>
      <div className="mt-6 text-white w-fit self-center">
        <button
          className="btn bg-[#FA551D] w-full py-2.5 px-8 rounded-[10px]"
          onClick={openModal}
        >
          View Detail
        </button>
      </div>
      
      {/* <div className="flex flex-col mt-4">
        <div className="text-[#091C62] p-1 text-left text-2xl">Email</div>
        <form className="email mt-1" action="/action_page.php">
          <input
            type="text"
            className="input-placeholder"
            placeholder="Email address here"
            name="email"
          ></input>
        </form>
      </div> */}
      <div className="flex flex-col mt-4">
        <div className="text-[#091C62] p-1 text-left text-2xl">
          Payment Method
        </div>
        <div className="flex md:flex-row sm:flex-col sm:items-center justify-between">
          <div className="flex"><button className="search-result text-3xl my-2" onClick={openModal1}><img src="" className="mr-2 w-10" alt=""></img>Card</button></div> 
          <button className="search-result text-3xl my-2" onClick={openModal2}>Cash App Pay</button>
        </div>
        <div className="mt-0 flex justify-center ">
          <button className="search-result text-3xl my-2 flex justify-center items-center" onClick={openModal3}>
            <img src={Apple} className="mr-2 w-10" alt=""></img>
            Apple Pay
          </button>
        </div>
      </div>
      <div className="flex flex-col self-center ">
        <div className="text-1xl mt-20">
          © 2024 CityParkLot. All rights reserved.
        </div>
        <div className="footer-link flex self-center">
          <a href="/" className="text-1xl text-[#091C62] mx-2 underline my-1">
            Terms of Service
          </a>
          <a href="/" className="text-1xl text-[#091C62] mx-2 underline my-1">
            Privacy Policy
          </a>
        </div>
      </div>
      <ViewDetailModal isOpen={isModalOpen} onClose={closeModal} />
      <CardModal isOpen={isModalOpen1} onClose={closeModal} />
      <CashModal isOpen={isModalOpen2} onClose={closeModal} />
      <AppleModal isOpen={isModalOpen3} onClose={closeModal} />
    </div>
  );
};

export default Paying;
