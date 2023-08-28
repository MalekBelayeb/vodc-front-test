import "../styles/globals.css";
import "../public/css/style.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Calendar() {
  const [showCalendar, setShowCalendar] = useState(false);

  function verify_token() {
    var token = cookies.get("API_TOKEN");
    if (token !== undefined && token !== null && token !== "") {
      setShowCalendar(true);
    } else {
      window.open("https://www.orangedigitalcenters.com/login");
    }
  }
  return (
    <>
      <div id="calendar" className="keypoint-calendar">
        <img
          src="../images/calendar.png"
          style={{ height: "auto", maxWidth: "3.7%" }}
          onClick={() => {
            setShowCalendar(true);
            verify_token();
          }}
        />
      </div>
      <Modal
        showCal={showCalendar}
        onClose={() => {
          setShowCalendar(false);
        }}
      />
    </>
  );
}

function Mute() {
  useEffect(() => {
    const muteBtn = document.querySelector(".mute-button");
    var myAudio = document.getElementById("myAudio");

    if (window.sessionStorage.mute === "1") {
      return muteBtn.querySelectorAll("span").forEach((el) => {
        myAudio.pause();
        el.classList.toggle("hidden");
      });
    }
  });
}

function Loading() {
  useEffect(() => {
    var loader = document.getElementById("loader");

    return () => {
      loader.style.left = "0";
      setTimeout(function () {
        loader.style.left = "500%";
      }, 250);
    };
  });

  return (
    <div className="loader" id="loader">
      <img src="../images/Cloud-transition(1).png" alt="" />
    </div>
  );
}
function MyApp({ Component, pageProps }) {
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  useEffect(() => {
    // const checkUserStatus = async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000/api/v1/user", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       credentials: "include",
    //     });

    //     const responseData = await response.json();
    //     const country =
    //       responseData.data.odcCountry.country.translations.fr.name;
    //     const countryCode = responseData.data.odcCountry.country.code;
    //     setCountry(country);
    //     setCountryCode(countryCode);
    //     console.log(responseData)
    //     return response.status;
    //   } catch (error) {
    //     console.error(error);
    //     return 500;
    //   }
    // };

    var loader = document.getElementById("loader");
    var calendar = document.getElementsByClassName("keypoint-calendar");

    let isFirstRun = sessionStorage.getItem("isFirstRun") ?? true;

    isFirstRun != "false"
      ? (loader.style.display = "none")
      : (loader.style.display = "block");
    //  isFirstRun != 'false' ? calendar[0].style.display ='none': calendar[0].style.display = 'block';

    loader.style.left = "0";
    setTimeout(function () {
      loader.style.left = "200%";
    }, 250);

    // checkUserStatus()
  });

  return (
    <>
      <nav style={{ backgroundColor: "black" }}>
        <a href="/">
          <div
            style={{
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "flex",
            }}
          >
            <img
              className="orange-logo"
              src="/images/orange-logo.png"
              width="50"
              height="50"
              alt="Orange"
            />
            <h5 className="orange-label">
              Orange
              <br />
              Digital Center
            </h5>
          </div>
        </a>
      </nav>
      <Mute />
      <Calendar />
      <Loading />

      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
