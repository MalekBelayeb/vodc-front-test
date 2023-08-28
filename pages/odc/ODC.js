/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
// Dependencies
import { useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "universal-cookie";

// Local Components
import Chat from "./Chat";
import { chatbotFlowResultsCodingSchool } from "../../shared/helpers/helpers";

/* -------------------------------------------------------------------------- */
/*                                ODC COMPONENT                               */
/* -------------------------------------------------------------------------- */
export default function Home({country}) {
  /* ---------------------------------- HOOKS --------------------------------- */
  const [, setScriptAlert] = useState();
  const [showModal, setShowModal] = useState(false);
  const [chatbotFlow, setChatbotFlow] = useState([]);

  const cookies = new Cookies();

  /* ----------------------------- RENDER HELPERS ----------------------------- */
  /**
   * toggleSound : this function switch the sound
   */

  useEffect(()=>{
    
    chatbotFlowResultsCodingSchool().then(res=>{
  
      setChatbotFlow([{
        id: "0",
        message:
          "Bonjour, bienvenu à Orange Digital Center , Avez-vous une idée sur le centre?",
        trigger : "1"
      },...res.data.data.chatbotFlow])
    
    })
    
  },[])

  function toggleSound() {
    const muteBtn = document.querySelector(".mute-button");
    var myAudio = document.getElementById("myAudio");
    muteBtn.addEventListener("click", () => {
      myAudio.paused ? myAudio.play() : myAudio.pause();
      muteBtn.querySelectorAll("span").forEach((el) => {
        el.classList.toggle("hidden");
      });
    });
  }

  /**
   * verify_token : this function to verify if the use connected to the app or not
   */
  function verify_token() {
    var token = cookies.get("API_TOKEN");
    if (token !== undefined && token !== null && token !== "") {
      setShowModal(true);
    } else {
      window.open("https://www.orangedigitalcenters.com/login");
    }
  }

  function do_VidZoom() {
    cookies.set(
      "API_TOKEN",
      "etdjxcfhshapsjzjdnzbdhaxazjdhegfezbhfezjndzghadbhzyegemqlm",
      undefined,
      "/",
      undefined
    );

    // if (window.innerWidth > '700px') {
    //# setup animation keyframes : from scaleX/Y = 1 (normal size) up to scaleX/Y = 2 (double size)
    var frames_VidZoom_In = [
      { transform: "scale(1, 1) ", transition: "transform 0.1s" },

      {
        transform: "scale(1.4, 1.4) translate(-10%,-10%)",
        transition: "transform 0.1s",
      },
    ];
    //# apply animation to an element
    document
      .getElementById("vid")
      .animate(frames_VidZoom_In, { duration: 700, easing: "ease-in" });
    //# set final size after animation ends ( or else it jumps back to scale=1 )
    document.getElementById("vid").style.transform =
      "scale(1.4, 1.4) translate(-10%,-10%)";
    document.getElementById("home").style.display = "none";
    document.getElementById("audio").style.display = "none";
    document.getElementById("chat").style.display = "none";
    document.getElementById("calendar").style.display = "none";
    
  }



  function decrease() {
    // if (window.innerWidth > '700px') {
    //# setup animation keyframes : from scaleX/Y = 1 (normal size) up to scaleX/Y = 2 (double size)
    var frames_VidZoom_In = [
      {
        transform: "scale(1.4, 1.4) translate(-10%,-10%)",
        transition: "transform 0.1s",
      },
      { transform: "scale(1, 1) ", transition: "transform 0.1s" },
    ];
    //# apply animation to an element
    document
      .getElementById("vid")
      .animate(frames_VidZoom_In, { duration: 700, easing: "ease-out" });
    document
      .getElementById("chat")
      .animate(frames_VidZoom_In, { duration: 700, easing: "ease-out" });
    //# set final size after animation ends ( or else it jumps back to scale=1 )
    document.getElementById("vid").style.transform = "scale(1, 1) ";
    document.getElementById("home").style.display = "block";
    document.getElementById("audio").style.display = "block";
    document.getElementById("chat").style.display = "block";
    document.getElementById("calendar").style.display = "block";
    // document.getElementsByClassName('test1').style
    // }
    // else if (window.innerWidth < '700px') return false;
    setShowModal(false);


  }
  /* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>
      <div id="wrap">
        <div id="inner">
          <audio
            id="myAudio"
            src="../../audio/Playground Fun.mp3"
            autoPlay
          ></audio>
          <div id="audio" className="keypoint-audio-home mute-button">
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
          </div>
          <div id="chat" className="keypoint-chat">
            <img
              src="/images/chat.png"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                do_VidZoom();
                verify_token();
              }}
            />
          </div>
          {showModal && (
            <Chat
              headerTitle={
                <div className="ChatTitle">Responsable Ecole du code {country}</div>
              }
              steps={chatbotFlow}
              botAvatar={"../images/avatarResponsable.png"}
              onClose={decrease}
            />
          )}
          <div id="home" className="keypoint-home">
            <a href="/">
              <img
                src="/images/Home.png"
                style={{ height: "auto", width: "3.8%" }}
              />
            </a>
          </div>
          <div>
            <video
              style={{width:'100%',  height: 'auto'}}
              autoPlay="autoPlay"
              loop="loop"
              muted
              src="../videos/CodingSchool9.mp4"
              id="vid"
            ></video>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="../../css/style.css" />
      <Script
        type="text/javascript"
        src="../../components/LcMouseDrag.js"
        onLoad={() => {
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
