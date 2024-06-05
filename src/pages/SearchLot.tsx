// // import "./index.css";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const SearchLot: React.FC = () => {
// //   const lotsNameArray = ["FL-101", "fl102", "fl-109"];
// //   const [resultLots, setResultLots] = useState([""]);

// //   const onClickSearchlotsNameInput = (
// //     event: React.KeyboardEvent<HTMLInputElement>
// //   ) => {
// //     const searchTerm = event.currentTarget.value.toLowerCase();
// //     let resultLotsArray: string[] = [""];
// //     if (searchTerm === "") {
// //       resultLotsArray = [""];
// //     } else {
// //       resultLotsArray = lotsNameArray.filter((lotName) =>
// //         lotName.toLowerCase().includes(searchTerm)
// //       );
// //     }
// //     setResultLots(resultLotsArray);

// //     // Show or hide the search-result class based on search results
// //     const searchResultElement = document.querySelector(
// //       ".content-search-result"
// //     ) as HTMLElement;
// //     if (searchResultElement) {
// //       if (resultLotsArray[0] !== "") {
// //         searchResultElement.style.visibility = "visible";
// //       } else {
// //         searchResultElement.style.cssText = "visibility: hidden !important";
// //       }
// //     }
// //   };

// //   const navigate = useNavigate();
// //   const handleClickGoToOtherPage = (item: string) => {
// //     navigate(`/Payment/${item}/parkingTab`);
// //   };

// //   return (
// //     <div className="search-lot text-center min-w-[480px] flex flex-col py-10">
// //       <div className="search-lot-header">
// //         <a href="/">
// //           <img
// //             className="citypark-logo"
// //             src="https://i.ibb.co/v4f4RtW/logo.png"
// //             alt="logo"
// //           ></img>
// //         </a>
// //       </div>
// //       <div className="search-lot-content mt-36 flex flex-col self-center">
// //         <div className="content-title text-7xl">Parking Lot</div>
// //         <div className="content-search my-12 flex flex-col">
// //           <form className="search self-center ml-12" action="/action_page.php">
// //             <input
// //               type="text"
// //               placeholder="Search Lots"
// //               name="search"
// //               onKeyUp={onClickSearchlotsNameInput}
// //             ></input>
// //             <button type="submit">
// //               <i className="fa fa-search"></i>
// //             </button>
// //           </form>
// //         </div>
// //         <div className="content-search-result flex flex-col self-center">
// //           {resultLots.length > 0 &&
// //             resultLots.map((item) => (
// //               <button
// //                 key={item}
// //                 className="search-result text-3xl my-2"
// //                 onClick={() => handleClickGoToOtherPage(item)}
// //               >
// //                 {item}
// //               </button>
// //             ))}
// //         </div>
// //       </div>
// //       <div className="search-lot-footer flex flex-col self-center mt-60">
// //         <div className="footer-copyright text-2xl">
// //           © 2024 CityParkLot. All rights reserved.
// //         </div>
// //         <div className="footer-link flex">
// //           <a href="https://stripe.com/legal/end-users" className="footer-link-text text-2xl underline m-5">
// //             Terms of Service
// //           </a>
// //           <a href="https://stripe.com/privacy" className="footer-link-text text-2xl underline m-5">
// //             Privacy Policy
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchLot;


// import "./index.css";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SearchLot: React.FC = () => {
//   // const lotsNameArray = ["FL-101", "fl102", "fl-109"];
//   const [resultLots, setResultLots] = useState([""]);
//   const [allLotsData, setAllLotsData] = useState([""]);
//   const [lotsNameArray, setLotsNameArray] = useState([""]);
//   useEffect(() => {
//     axios.get("https://city-park-lot.run.place/city-park-lot/api/payingapp/lot")
//          .then(res => {
//             const resultArray = res.data;
//             setAllLotsData(resultArray);

//             // Extract siteCode values from resultArray
//             const lotsNameArray = resultArray.map((result: any) => result.siteCode);
//             setLotsNameArray(lotsNameArray);
//          })
//          .catch(error => {
//             console.log("Error:", error);
//          });
// }, []);

//   const onClickSearchlotsNameInput = (
//     event: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     const searchTerm = event.currentTarget.value.toLowerCase();

//     let resultLotsArray: string[] = [""];

//     if (searchTerm === "") {
//       resultLotsArray = [""];
//     } else {
//       resultLotsArray = lotsNameArray.filter((lotName) =>
//         lotName.toLowerCase().includes(searchTerm)
//       );
//     }
//     setResultLots(resultLotsArray);

//     // Show or hide the search-result class based on search results
//     const searchResultElement = document.querySelector(
//       ".content-search-result"
//     ) as HTMLElement;
//     if (searchResultElement) {
//       if (resultLotsArray[0] !== "") {
//         searchResultElement.style.visibility = "visible";
//       } else {
//         searchResultElement.style.cssText = "visibility: hidden !important";
//       }
//     }
//   };

//   const navigate = useNavigate();
//   const handleClickGoToOtherPage = (item: string) => {
//     navigate(`/Payment/${item}/parkingTab`);
//   };

//   return (
//     <div className="search-lot text-center min-w-[480px] flex flex-col py-10">
//       <div className="search-lot-header">
//         <a href="/">
//           <img
//             className="citypark-logo"
//             src="https://i.ibb.co/v4f4RtW/logo.png"
//             alt="logo"
//           ></img>
//         </a>
//       </div>
//       <div className="search-lot-content mt-36 flex flex-col self-center">
//         <div className="content-title text-7xl">Parking Lot</div>
//         <div className="content-search my-12 flex flex-col">
//           <form className="search self-center ml-12" action="/action_page.php">
//             <input
//               type="text"
//               placeholder="Search Lots"
//               name="search"
//               onKeyUp={onClickSearchlotsNameInput}
//             ></input>
//             <button type="submit">
//               <i className="fa fa-search"></i>
//             </button>
//           </form>
//         </div>
//         <div className="content-search-result flex flex-col self-center">
//           {resultLots.length > 0 &&
//             resultLots.map((item, index) => (
//               <button
//                 key={index}
//                 className="search-result text-3xl my-2"
//                 onClick={() => handleClickGoToOtherPage(item)}
//               >
//                 {item}
//               </button>
//             ))}
//         </div>
//       </div>
//       <div className="search-lot-footer flex flex-col self-center mt-60">
//         <div className="footer-copyright text-2xl">
//           © 2024 CityParkLot. All rights reserved.
//         </div>
//         <div className="footer-link flex">
//           <a href="https://stripe.com/legal/end-users" className="footer-link-text text-2xl underline m-5">
//             Terms of Service
//           </a>
//           <a href="https://stripe.com/privacy" className="footer-link-text text-2xl underline m-5">
//             Privacy Policy
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchLot;

import "./index.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchLot: React.FC = () => {
  const [resultLots, setResultLots] = useState([{}]);
  const [allLotsData, setAllLotsData] = useState([{}]);
  // const [lotsNameArray, setLotsNameArray] = useState([""]);
  useEffect(() => {
    axios.get("https://city-park-lot.run.place/city-park-lot/api/payingapp/lot")
         .then(res => {
            const resultArray = res.data;
            setAllLotsData(resultArray);
            console.log("successful");
            

            // Extract siteCode values from resultArray
            // const lotsNameArray = resultArray.map((result: any) => result.siteCode);
            // setLotsNameArray(lotsNameArray);
         })
         .catch(error => {
            console.log("Error:", error);
         });
}, []);

  const onClickSearchlotsNameInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.currentTarget.value.toLowerCase();

    let resultLotsArray: any[] = [{}];

    if (searchTerm !== "") {
      resultLotsArray = allLotsData.filter((lotData : any) =>
        lotData.siteCode?.toLowerCase().includes(searchTerm)
      );
    }
    console.log("resultLotsArray : ", resultLotsArray)
    setResultLots(resultLotsArray);

    // Show or hide the search-result class based on search results
    const searchResultElement = document.querySelector(
      ".content-search-result"
    ) as HTMLElement;
    if (searchResultElement) {
      if (searchTerm !== "") {
        searchResultElement.style.visibility = "visible";
      } else {
        searchResultElement.style.cssText = "visibility: hidden !important";
      }
    }
  };

  const navigate = useNavigate();
  const handleClickGoToOtherPage = (item: any) => {
    
    const parkName = item.siteCode;
    const parkImgId = encodeURIComponent(item.cover.split('-')[1]);
    
    console.log("item:", item, "parkName : ", parkName, "parkImgId : ", parkImgId)
    navigate(`/Payment/parkingTab/`,
      {state: { parkName: parkName, parkImgId: parkImgId}}
    );
  };

  return (
    <div className="search-lot text-center min-w-[480px] flex flex-col py-10">
      <div className="search-lot-header">
        <a href="/">
          <img
            className="citypark-logo"
            src="https://i.ibb.co/v4f4RtW/logo.png"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="search-lot-content mt-36 flex flex-col self-center">
        <div className="content-title text-7xl">Parking Lot</div>
        <div className="content-search my-12 flex flex-col">
          <form className="search self-center ml-12" action="/action_page.php">
            <input
              type="text"
              placeholder="Search Lots"
              name="search"
              onKeyUp={onClickSearchlotsNameInput}
            ></input>
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="content-search-result flex flex-col self-center">
          {resultLots.length > 0 &&
            resultLots.map((item : any, index) => (
              <button
                key={index}
                className="search-result text-3xl my-2"
                onClick={() => handleClickGoToOtherPage(item)}
              >
                {item?.siteCode}
              </button>
            ))}
        </div>
      </div>
      <div className="search-lot-footer flex flex-col self-center mt-60">
        <div className="footer-copyright text-2xl">
          © 2024 CityParkLot. All rights reserved.
        </div>
        <div className="footer-link flex">
          <a href="https://stripe.com/legal/end-users" className="footer-link-text text-2xl underline m-5">
            Terms of Service
          </a>
          <a href="https://stripe.com/privacy" className="footer-link-text text-2xl underline m-5">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchLot;
