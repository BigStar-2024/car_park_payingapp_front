// import "./index.css";
// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import LabTabs from "../components/Tabview";
// import { useAppDispatch } from "../redux/hooks";
// import { parkName } from "../redux/slice/payReducer";

// const Payment = () => {
//   const dispatch = useAppDispatch();
//   const [imageUrl, setImageUrl] = useState("");
//   const { item } = useParams<string>();

//   useEffect(() => {
//     item && updateImageUrl(item);
//     dispatch(parkName(String(item)));
//   }, [item, dispatch]);
//   // Function to update the image URL
//   const updateImageUrl = (newUrl: string) => {
//     setImageUrl("/" + newUrl + ".jpg");
//   };

//   return (
//     <div className="payment w-full flex  h-screen">
//       <div className="flex w-1/2 max-[1380px]:hidden">
//         <div
//           className="h-full w-full "
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//           }}
//         ></div>
//       </div>
//       <div className="content flex flex-col w-1/2 items-center bg-white relative max-[1380px]:w-full">
//         <a href="/">
//           <img
//             className="citypark-logo2 absolute"
//             src="https://i.ibb.co/v4f4RtW/logo.png"
//             alt="logo"
//           ></img>
//         </a>
//         <div className="content-title text-[#FA551D] text-[40px] w-full text-center mt-12 px-10">
//           Parking lots: {item}
//         </div>
//         <div className="flex mt-8 w-full px-10 text-center justify-center">
//           <LabTabs />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import "./index.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LabTabs from "../components/Tabview";
import { useAppDispatch } from "../redux/hooks";
import { parkName } from "../redux/slice/payReducer";

const Payment = () => {
  const dispatch = useAppDispatch();
  const params = useParams()
  const [imageUrl, setImageUrl] = useState("");
  const currentparkName = params.parkName;
  const currentParkImgId = params.parkImgId;
  

  useEffect(() => {
    currentparkName && updateImageUrl(currentParkImgId);
    dispatch(parkName(String(currentparkName)));
  }, [currentparkName, dispatch, currentParkImgId]);
  // Function to update the image URL
  const updateImageUrl = (newUrl: any) => {
    setImageUrl("https://city-park-lot.run.place/city-park-lot/api/end-user/public/img/cover-" + decodeURIComponent(newUrl));
  };

  return (
    <div className="payment w-full flex  h-screen">
      <div className="flex w-1/2 max-[1380px]:hidden">
        <div
          className="h-full w-full "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="content flex flex-col w-1/2 items-center bg-white relative max-[1380px]:w-full">
        <a href="/">
          <img
            className="citypark-logo2 absolute"
            src="https://i.ibb.co/v4f4RtW/logo.png"
            alt="logo"
          ></img>
        </a>
        <div className="content-title text-[#FA551D] text-[40px] w-full text-center mt-12 px-10">
          Parking lots: {currentparkName}
        </div>
        <div className="flex mt-8 w-full px-10 text-center justify-center">
          <LabTabs />
        </div>
      </div>
    </div>
  );
};

export default Payment;

