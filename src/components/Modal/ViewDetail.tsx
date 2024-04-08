import React from "react";
import closeBtn from "../assets/CloseBtn.svg";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ViewDetailModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const payAmount = useAppSelector((state: RootState) => state.pay.value);
  const hourlyRate = useAppSelector((state: RootState) => state.pay.hourlyRate);
  const currentTime = useAppSelector(
    (state: RootState) => state.pay.currentTime
  );
  const endTime = useAppSelector((state: RootState) => state.pay.endTime);
  const parkName = useAppSelector((state: RootState) => state.pay.parkName);
  const licensePlateNumber = useAppSelector(
    (state: RootState) => state.pay.licensePlateNumber
  );
  const plateformFee = 0.5;
  const subTotal = payAmount + plateformFee;
  const salesTax = payAmount * 0.065;
  const fomattedSalesTax = salesTax.toFixed(2);
  const totalDue = subTotal + salesTax;
  const fomattedTotalDue = totalDue.toFixed(2);
  const parkPeriod = payAmount / hourlyRate;
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
          View Detail
        </p>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] p-1 text-left font-bold text-[20px]">
              CityPark.io - Lot:{parkName}
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">
              ${payAmount}
            </p>
          </div>
          <p className="text-left">
            <strong>LPN</strong>: {licensePlateNumber}
          </p>
          <p className="text-left">
            <strong>Rate</strong>::{parkPeriod}Hr-${payAmount} - Fixed Duration:{" "}
            {parkPeriod} hours at ${payAmount}
          </p>
          <p className="text-left">
            <strong>Valid</strong>:{currentTime} EDT - {endTime} EDT
          </p>
        </div>
        <hr className="my-4"></hr>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] font-bold p-1 text-left text-[20px]">
              Platform Fee
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">
              ${plateformFee}
            </p>
          </div>
          <p className="text-left">CityPark Inc. Platform Fee</p>
        </div>
        <hr className="my-4"></hr>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] font-bold p-1 text-left text-[20px]">
              Subtotal
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">
              ${subTotal}0
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[grey] p-1 text-left text-[20px]">
              Sales tax (6.5%)
            </p>
            <p className="text-[grey] p-1 text-left text-[20px]">
              ${fomattedSalesTax}
            </p>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="mt-6">
          <div className="flex flex-row justify-between">
            <p className="text-[#091C62] p-1 font-bold text-left text-[20px]">
              Total due
            </p>
            <p className="text-[#091C62] p-1 text-left text-[20px]">
              ${fomattedTotalDue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailModal;
