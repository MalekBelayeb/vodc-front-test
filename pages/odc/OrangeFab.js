import { useEffect, useState } from "react";
import Script from "next/script";
import Chat from "./Chat";
import { chatbotFlowResultsOrangeFab } from "../../shared/helpers/helpers";

export default function Home({country}) {
  const [scriptAlert, setScriptAlert] = useState();
  const [showModal, setShowModal] = useState(false);
  const [chatbotFlow, setChatbotFlow] = useState([]);


  useEffect(() => {
    chatbotFlowResultsOrangeFab().then((res) => {
      setChatbotFlow([
        {
          id: "0",
          message:
            "Bonjour, bienvenu à Orange Digital Center , Avez-vous une idée sur le centre?",
          trigger: "1",
        },
        ...res.data.data.chatbotFlow,
      ]);
    });
  }, []);

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

  function do_VidZoom() {
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
    document.getElementById("chat").style.display = "block";
    document.getElementById("calendar").style.display = "block";
    document.getElementById("audio").style.display = "block";
    setShowModal(false);
  }

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div id="wrap">
        <div id="inner" className="test2">
          <audio
            id="myAudio"
            src="../../audio/Playground Fun.mp3"
            autoPlay
          ></audio>
          {/* <div id='calendar' className="keypoint-calendar">
                        <img onClick={() => {
                            setShowCalendar(true);
                        }} src="/images/calendar.png" style={{ height: "52px", width: "53px" }} />
                    </div>
                    <Modal showCal={showCalendar} onClose={() => {
                        setShowCalendar(false);
                    }} /> */}

          <div id="chat" className="keypoint-chat-orangefab">
            <img
              src="/images/chat.png"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                setShowModal(true);
                do_VidZoom();
              }}
            />
          </div>

          {showModal && (
            <Chat
              steps={chatbotFlow}
              botAvatar={"../images/OrangeFabResp.png"}
              headerTitle={
                <div className="ChatTitle">Responsable Orange Fab {country}</div>
              }
              onClose={decrease}
            />
          )}
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
            {/* <div onClick={toggleSound} className="key" style={{ top: '90%', left: '16%', height: '37px', width: '37px', border: ' 8px solid #fff' }}></div> */}
          </div>
          <div id="home" className="keypoint-home">
            <a href="/">
              <img
                src="/images/Home.png"
                style={{ height: "52px", width: "53px" }}
              />
            </a>
          </div>
          <div>
            <video
              id="vid"
              style={{width:'100%',  height: 'auto'}}
              autoPlay="autoPlay"
              loop="loop"
              muted
              src="../videos/OrangeFab7.mp4"
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
    </div>
  );
}
