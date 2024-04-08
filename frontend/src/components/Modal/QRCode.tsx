import React from "react";
import closeBtn from "../assets/CloseBtn.svg";
import "./Card.css"
// import Button from "@mui/material/Button";
// import Lottie from "react-lottie";
// import QRCode from "../assets/QRcode.json";
// import QRCode from "../assets/QRcode.png";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const QRModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: QRCode,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <img className="close-btn" src={closeBtn} alt="close"></img>
        </button>
        <p className="text-[#FA551D] text-[28px] font-bold text-center">
          Cash App Pay
        </p>
        {/* <Lottie options={defaultOptions} height={300} width={300} /> */}
        <div className="text-white flex flex-col mt-8 w-full justify-center items-center">
          <div className="w-[300px] relative">
            <img src="https://api.cash.app/qr/f/GRANTLY_MANAGED_GRANT%3Frequest_id=GRR_vkc83zpehpg06detyt0rrcr4-9njgs6&method=qr&type=cap?rounded=0&format=png?border=0" alt=""></img>
            <div className="">
              <div className="absolute w-[300px] h-[2px] opacity-60 bg-[#FA551D] line"></div>
            </div>
          </div>
          {/* <Button
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
          >
            Reveal QR code
          </Button> */}
        </div>
        <div className="flex flex-col mt-10 bg-[#FFF2EE] rounded-[10px] px-10 items-center w-full h-fit">
          <p className="text-[18px] font-bold m-5 text-[#091C62]">
            Use <a className="text-[##091C62] opacity-90 underline" href="https://cash.app/">Cash App</a> or your phone's camera to scan and pay.
          </p>
        </div>
        <div className="parking-footer flex flex-col self-center ">
          <div className="text-1xl mt-12">
            Powered by <a href="https://stripe.com/"><strong>Stripe</strong></a>
          </div>
          <div className="footer-link flex self-center">
            <a href="https://stripe.com/us/legal" className="text-1xl text-[#091C62] mx-2 underline my-1">
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

export default QRModal;
