import "./index.css";
import React, { useState } from "react";

const SearchLot: React.FC = () => {
  const lotsNameArray = ["FL-101", "fl102", "fl-108"];
  const [resultLots, setResultLots] = useState([""]);

  const onClickSearchlotsNameInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.currentTarget.value.toLowerCase();
    let resultLotsArray: string[] = [""];
    if (searchTerm == "") {
      resultLotsArray = [""];
    } else {
      resultLotsArray = lotsNameArray.filter((lotName) =>
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

  return (
    <div className="search-lot text-center flex flex-col p-10">
      <div className="search-lot-header">
        <a href="/">
          <img
            className="carpark-logo"
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
              <button className="search-result text-3xl my-2">{item}</button>
            ))}
        </div>
      </div>
      <div className="search-lot-footer flex flex-col self-center mt-60">
        <div className="footer-copyright text-2xl">
          © 2024 CityParkLot. All rights reserved.
        </div>
        <div className="footer-link flex">
          <a href="/" className="footer-link-text text-2xl underline m-5">
            Terms of Service
          </a>
          <a href="/" className="footer-link-text text-2xl underline m-5">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchLot;
