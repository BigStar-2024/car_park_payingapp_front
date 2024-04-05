import React from "react";
import "./index.css";
import Rates from "./Rates";
import risk from "./assets/Risk.gif";
import ColorCheckboxes from "./Checkbox";
import { useState, useEffect } from "react";

const Parking = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  useEffect(() => {
    const getCurrentTime = (): string => {
      const now = new Date();
      return now.toLocaleTimeString();
    };

    const calculateEndTime = (time: string): string => {
      const current = new Date();
      const endTime = new Date(current.getTime() + 3 * 60 * 60 * 1000); // Adding 3 hours
      return endTime.toLocaleTimeString();
    };

    setCurrentTime(getCurrentTime());
    setEndTime(calculateEndTime(currentTime));
  }, []);

  return (
    <div className="payment w-full flex flex-col h-screen">
      <div className="flex flex-row justify-between">
        <div className="text-[#091C62] p-1 text-2xl">License Plate</div>
        <form className="license-plate ml-20" action="/action_page.php">
          <input
            type="text"
            className="input-placeholder"
            placeholder="License Plate"
            name="search"
          ></input>
        </form>
      </div>
      <div className="flex flex-row justify-between my-2">
        <div className="text-[#091C62] p-1 text-2xl">Rates</div>
        <div className="">
          <Rates />
        </div>
      </div>
      <div className="flex flex-col mt-2 risk-area self-center items-center w-full">
        <div className="flex flex-row ">
          <div className="mr-5">
            <img src={risk} alt="Risk" className="risk-img"></img>
          </div>
          <p className="text-2xl text-[#091C62]">
            Disclaimer ― Park at Your Own Risk
          </p>
        </div>
        <div className="text-[20px] text-[#091C62] mt-2">
          {" "}
          This facility and or its agents are not responsible for any loss or
          damage which might be sustained by any vehicles while on this
          premises. Vehicles parked here are done so at vehicle owner’s own
          risk.{" "}
        </div>
      </div>
      <div className="flex mt-2 items-center">
        <div className="">
          <ColorCheckboxes />
        </div>
        <p className="text-[#091C62] font-bold mx-5">
          I accept the Terms of Service*
        </p>
      </div>
      <div className="flex flex-row w-full justify-around">
        <div className=" ">
          <p className="text-[#091C62] text-left font-bold mx-2 my-2">
            Parking Time
          </p>
          <div className="flex bg-[#F5F5F5] w-72 h-10 justify-center items-center border">
            <p className="text-[#FA551D]  mx-5">{`${currentTime} - ${endTime}`}</p>
          </div>
        </div>
        <div className=" ">
          <p className="text-[#091C62] text-left font-bold mx-2 my-2">
            Parking Price
          </p>
          <div className="flex bg-[#F5F5F5] w-72 h-10 justify-center items-center border">
            <p className="text-[#FA551D] font-[400] mx-5">$15</p>
          </div>
        </div>
      </div>
      <div className="mt-3 text-white w-full">
        <button className="btn bg-[#FA551D] w-full p-2.5 rounded-[10px]">Pay Now</button>
      </div>
      <div className="parking-footer flex flex-col self-center ">
        <div className="footer-copyright text-1xl mt-8">
          © 2024 CityParkLot. All rights reserved.
        </div>
        <div className="footer-link flex self-center">
          <a href="/" className="footer-link-text text-1xl mx-2 underline my-1">
            Terms of Service
          </a>
          <a href="/" className="footer-link-text text-1xl mx-2 underline my-1">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Parking;
