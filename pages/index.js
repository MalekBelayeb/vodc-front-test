import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [scriptAlert, setScriptAlert] = useState();

  
  function toggle() {
    var blur = document.getElementsByClassName("blur");

    for (var i = 0; i < blur.length; i++) {
      blur[i].classList.toggle("active");
    }

    document.getElementById("popup")?.classList.toggle("active");
  }

  function toggleSound() {
    const muteBtn = document.querySelector(".mute-button");
    var myAudio = document.getElementById("myAudio");
    muteBtn.addEventListener("click", () => {
      myAudio.paused
        ? myAudio.play() && sessionStorage.mute == 0
        : myAudio.pause();
      muteBtn.querySelectorAll("span").forEach((el) => {
        el.classList.toggle("hidden");
        sessionStorage.mute = 1;
      });
    });
  }

  function moveTo(url) {
    sessionStorage.setItem("isFirstRun", false);
    window.location.href = url;
  }

  return (
    <>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>
      <div id="wrap">
        <div id="inner">
          <audio id="myAudio" src="../../audio/Playground Fun.mp3"></audio>

          {/* <div className="keypoint-calendar">
                        <img src="/images/calendar.png" style={{ height: "auto", maxWidth:'4%'  }} />
                    </div> */}

          <div className="keypoint-audio-home mute-button">
            <span className="hidden">
              <img
                src="/images/soundmute.png"
                style={{ height: "auto", maxWidth: "2.5%" }}
                value="sound"
                onClick={toggleSound}
              />{" "}
            </span>
            <span>
              {" "}
              <img
                src="/images/audio.png"
                style={{ height: "auto", maxWidth: "2.5%" }}
                value="sound"
                onClick={toggleSound}
              />{" "}
            </span>
            {/* <div onClick={toggleSound} className="key" style={{ top: '90%', left: '16%', height: '37px', width: '37px', border: ' 8px solid #fff' }}></div> */}
          </div>
          <div className="icon blur">
            <div className="tooltip" style={{ top: "196px", left: " 555px" }}>
              <p className="tooltip-text">Ecole du code</p>
            </div>
            <div
              className="keypoint-1"
              style={{ height: "30px", width: "30px" }}
            >
              <a onClick={(e) => moveTo("/odc/ODC")}></a>
            </div>
          </div>

          <div className="icon blur">
            <div className="tooltip" style={{ top: "440px", left: "414.2px" }}>
              <p className="tooltip-text">Orange Fab</p>{" "}
            </div>
            <div
              className="keypoint-2"
              style={{ height: "30px", width: "30px" }}
            >
              <a onClick={(e) => moveTo("/odc/OrangeFab")}></a>
            </div>
          </div>

          <div className="icon blur">
            <div className="tooltip" style={{ top: "610px", left: "1136px" }}>
              <p className="tooltip-text">Fab Lab</p>
            </div>
            <div
              className="keypoint-3"
              style={{ height: "30px", width: "30px" }}
            >
              <a onClick={(e) => moveTo("/odc/FabLab")}></a>
            </div>
          </div>
          <div>
            <video
              className="blur homeView"
              autoPlay="autoPlay"
              loop="loop"
              muted
              src="../videos/VODCTest15.mp4"
            >
              {" "}
            </video>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }} id="popup">
        <h1 className="popupTitle">
          Welcome to the Orange Digital Center Virtual Tour
        </h1>
        <p className="popupDesc">
          {" "}
          Orange Digital Center houses four strategic programs under the same
          roof : the coding school, the FabLab Solidaire, Orange Fab and Orange
          Digital Ventures Africa.{" "}
        </p>
        <button
          className="button"
          onClick={(e) => {
            toggle(), toggleSound();
          }}
        >
          Start the tour
        </button>
      </div>

      <link rel="stylesheet" href="../../css/style.css" />
      <Script
        type="text/javascript"
        src="../../components/LcMouseDrag.js"
        onLoad={() => {
          let isFirstRun = sessionStorage.getItem("isFirstRun") ?? true;
          document.getElementsByClassName("keypoint-1")[0].style.transform = "translate(100px,222px)"
          //document.getElementsByClassName("keypoint-1")[0].style.top = `${document.getElementById("wrap").offsetHeight * 0.5}px`
          //document.getElementsByClassName("keypoint-1")[0].style.left = `${document.getElementById("wrap").offsetWidth * 0.5}px`
          console.log(document.getElementsByClassName("keypoint-1")[0].style.left)
          if (isFirstRun != "false") {
            document.getElementById("popup").style.display = "block";

            toggle();
          }

          setScriptAlert(window.lc_mouseDrag("#inner", 0.3, false, false));
        }}
      ></Script>
      <Script
        src="../../components/lc-mouse-drag.min.js"
        type="text/javascript"
      ></Script>
    </>
  );
}
