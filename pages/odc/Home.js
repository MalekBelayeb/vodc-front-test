// import Head from "next/head"
// import dynamic from 'next/dynamic';
// import Script from "next/script";
// import { useEffect, useState } from 'react';
// import Image from "next/image";

export default function Home() {
//     const [scriptAlert, setScriptAlert] = useState();
//     const [isFirstRun, setIsFirstRun] = useState(true);
}
//     function toggle() {
//         var blur = document.getElementsByClassName('blur');

//         for (var i = 0; i < blur.length; i++) {
//             blur[i].classList.toggle('active')
//         }
//         document.getElementById('popup').classList.toggle('active');
//     };


//     function toggleSound() {
//         const muteBtn = document.querySelector('.mute-button');
//         var myAudio = document.getElementById("myAudio");
//         muteBtn.addEventListener('click', () => {
//             myAudio.paused ? myAudio.play() : myAudio.pause();
//             muteBtn.querySelectorAll('span').forEach(el => {
//                 el.classList.toggle('hidden');
//             });
//         });
//     }



//     useEffect(() => {
//         window.addEventListener('beforeunload',()=>{
//             sessionStorage.setItem('isFirstRun',false)
//         })
//         return () => toggle();
//     }, []);

//     useEffect(() => {
//         setIsFirstRun(sessionStorage.getItem('isFirstRun'))    
//     }, [isFirstRun]);


//     return (
//         <>

//             <div>
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//                 <Head>
//                     <title>Virtual Orange Digital Center</title>
//                     <Image
//                         src="/images/menu.png"
//                         alt="ODC"
//                         width={1600}
//                         height={82}
//                         style={{ margin: "-4px" }}
//                     />
//                 </Head>
//             </div>
//             <div id="wrap" >
//                 <div id="inner">
//                     <audio
//                         id="myAudio" src="../../audio/Playground Fun.mp3" autoPlay>
//                     </audio>
//                     <div className="keypoint-calendar">
//                         <img src="/images/calendar.png" style={{ height: "52px", width: "53px" }} />
//                     </div>
                 
//                     <div className="keypoint-audio mute-button">
//                       <span className="hidden"><img src="/images/soundmute.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound}/> </span>  
//                       <span> <img src="/images/audio.png" style={{ height: "36px", width: "37px" }} value="sound" onClick={toggleSound}/> </span> 
//                     </div>
                   
//                     <div className="icon blur">
//                         <div className="tooltip" style={{ top: "239px", left: " 688px" }}>
//                             Ecole du code
//                         </div>
//                         <div className="keypoint-1" style={{ height: "30px", width: "30px" }}>
//                             <a href="/odc/ODC"></a>
//                         </div>
//                     </div>

//                     <div className="icon blur">
//                         <div className="tooltip" style={{ top: "477px", left: " 593px" }}>
//                             Orange Fab
//                         </div>
//                         <div className="keypoint-2" style={{ height: "30px", width: "30px" }}>
//                             <a href="/odc/OrangeFab"></a>
//                         </div>
//                     </div>

//                     <div className="icon blur">
//                         <div className="tooltip" style={{ top: "633px", left: " 1247px" }}>
//                             Fab Lab
//                         </div>
//                         <div className="keypoint-3" style={{ height: "30px", width: "30px" }}>
//                             <a href="/odc/FabLab"></a>
//                         </div>
//                     </div>
//                     <div>
//                         <video className="blur" autoPlay="autoPlay" loop="loop" muted src="../videos/VODCTest15.mp4"> </video>
//                     </div>
//                 </div>
//             </div>
            

//             if (this.isFirstRun == null) 
//             {
//             <div id="popup">
//                 <h1>Welcome to the Orange Digital Center Virtual Tour</h1>
//                 <p> Orange Digital Center houses four strategic programs under the same roof : the coding school, the FabLab Solidaire, Orange Fab and Orange Digital Ventures Africa. </p>
//                 <button className="button" onClick={toggle}>Start the tour</button>
//             </div>
//         }
//             <link rel="stylesheet" href="../../css/style.css" />
//             <Script type="text/javascript" src="../../components/LcMouseDrag.js"
//                 onLoad={() => {
//                     setScriptAlert(window.lc_mouseDrag('#inner', 0.3, false, false));
//                 }}>
//             </Script>
//             <Script src="../../components/lc-mouse-drag.min.js" type="text/javascript"></Script>


//         </>
//     )

// }