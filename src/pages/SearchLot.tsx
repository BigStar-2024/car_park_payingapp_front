import "./index.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Lot {
  siteCode: string;
}

const SearchLot: React.FC = () => {
  const [lotsNameArray, setLotsNameArray] = useState([""]);
  const [lostsData, setLotsData] = useState<Lot[]>([]);
  const [resultLots, setResultLots] = useState([""]);

  useEffect(() => {
    axios
      .get("https://city-park-lot.run.place/city-park-lot/api/payingapp/lot")
      .then((res) => {
        console.log(res);
        const results = res.data;
        setLotsData(prevLotsData=> {
          return results.map((lot : Lot) => ({...prevLotsData, siteCode: lot.siteCode}));
        })
    })
    .catch(error => {
      console.log("Fetch Error: ", error);
    })
  },[])

  const onClickSearchlotsNameInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.currentTarget.value.toLowerCase();
    let resultLotsArray: string[] = [""];
    if (searchTerm === "") {
      resultLotsArray = [""];
    } else {
      resultLotsArray = lostsData
        .map(lot => lot.siteCode)
        .filter((lotName) =>
          lotName.toLowerCase().includes(searchTerm)
      );
    }
    setResultLots(resultLotsArray);

    // Show or hide the search-result class based on search results
    const searchResultElement = document.querySelector(
      ".content-search-result"
    ) as HTMLElement;
    if (searchResultElement) {
      if (resultLotsArray[0] !== "") {
        searchResultElement.style.visibility = "visible";
      } else {
        searchResultElement.style.cssText = "visibility: hidden !important";
      }
    }
  };

  const navigate = useNavigate();
  const handleClickGoToOtherPage = (item: string) => {
    navigate(`/Payment/${item}/parkingTab`);
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
            resultLots.map((item) => (
              <button
                key={item}
                className="search-result text-3xl my-2"
                onClick={() => handleClickGoToOtherPage(item)}
              >
                {item}
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
