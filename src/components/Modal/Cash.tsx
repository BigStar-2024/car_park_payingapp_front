import React from "react";
import closeBtn from "../assets/CloseBtn.svg";
import Button from "@mui/material/Button";
import Lottie from "react-lottie";
import QRCode from "../assets/QRcode.json";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CashModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: QRCode,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white rounded-lg border-solid border-0 border-[#FA551D] relative p-10 m-10"
        style={{ transition: "transform 3s", transform: "scale(1)" }}
      >
        {/* Add your detailed content here */}
        <button
          onClick={onClose}
          className="absolute right-[30px] top-[30px] w-[36px]"
        >
          <img className="close-btn" src={closeBtn}></img>
        </button>
        <p className="text-[#FA551D] text-[28px] font-bold text-center">
          Cash App Pay
        </p>
        <div className="flex flex-row mt-3 bg-[#FFF2EE] rounded-[10px] px-10 items-center w-full h-fit">
          <Lottie options={defaultOptions} height={100} width={100} />
          <p className="text-2xl font-bold m-10 text-[#091C62]">
            After submitting your order, scan the QR code using Cash App Pay.
          </p>
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
            Reveal QR code
          </Button>
        </div>
        <div className="parking-footer flex flex-col self-center ">
          <div className="text-1xl mt-12">
            Powered by <strong>Stripe</strong>
          </div>
          <div className="footer-link flex self-center">
            <a href="/" className="text-1xl text-[#091C62] mx-2 underline my-1">
              Terms
            </a>
            <a href="/" className="text-1xl text-[#091C62] mx-2 underline my-1">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashModal;
