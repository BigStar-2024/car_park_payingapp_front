import "./index.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LabTabs from "../components/Tabview";

const Payment = () => {
  const [imageUrl, setImageUrl] = useState("");

  const { item } = useParams<any>();

  useEffect(() => {
    item && updateImageUrl(item);
  }, [item]);
  // Function to update the image URL
  const updateImageUrl = (newUrl: string) => {
    setImageUrl("/" + newUrl + ".jpg");
  };

  return (
    <div className="payment w-full flex h-screen">
      <div className="flex w-full">
        <img className="h-screen w-auto" src={imageUrl} alt="Lot Image"></img>
      </div>
      <div className="fixed translate-x-1/2 flex flex-col w-full bg-white h-screen">
        <a href="/">
          <img
            className="carpark-logo"
            src="https://i.ibb.co/v4f4RtW/logo.png"
            alt="logo"
          ></img>
        </a>
        <div className="content-title text-[#FA551D] text-[40px] w-1/2 text-center mt-12 px-10">
          Parking lots: {item}
        </div>
        <div className="flex mt-8 w-1/2 px-10 text-center justify-center">
          <LabTabs />
        </div>
      </div>
    </div>
  );
};

export default Payment;
