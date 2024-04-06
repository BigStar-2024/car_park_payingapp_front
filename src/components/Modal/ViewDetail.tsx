import React from "react";
import closeBtn from "../assets/CloseBtn.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ViewDetailModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        <p className="text-[#FA551D] text-[28px] font-bold text-center">View Detail</p>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] p-1 text-left font-bold text-[20px]">
              One8.io - Lot:Ds-101
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">$10.00</p>
          </div>
          <p className="text-left">
            LPN: 30DZLG, Rate:3Hr-$10 - Fixed Duration: 3.0 hours at $10.00,
          </p>
          <p className="text-left">
            Valid:04/05 03:43 AM EDT - 04/05 06:43 AM EDT
          </p>
        </div>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] font-bold p-1 text-left text-[20px]">
              Platform Fee
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">$0.50</p>
          </div>
          <p className="text-left">One8 Inc. Platform Fee</p>
        </div>
        <hr className="my-4"></hr>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] font-bold p-1 text-left text-[20px]">
              Subtotal
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">$10.50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[grey] p-1 text-left text-[20px]">
              Sales tax (6.5%)
            </p>
            <p className="text-[grey] p-1 text-left text-[20px]">$0.65</p>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] p-1 font-bold text-left text-[20px]">
              Total due
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">$11.15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailModal;
