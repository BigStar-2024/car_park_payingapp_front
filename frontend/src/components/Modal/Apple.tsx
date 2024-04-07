import React from "react";
import closeBtn from "../assets/CloseBtn.svg";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AppleModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg border-solid border-0 border-[#FA551D] relative p-10" style={{ transition: 'transform 3s', transform: 'scale(1)' }}>
        {/* Add your detailed content here */}
        <button
          onClick={onClose}
          className="absolute right-[30px] top-[30px] w-[36px]"
        >
          <img className="close-btn" src={closeBtn}></img>
        </button>
        <p className="text-[#FA551D] text-[28px] font-bold text-center">Cash</p>
        
      </div>
    </div>
  );
};

export default AppleModal;
