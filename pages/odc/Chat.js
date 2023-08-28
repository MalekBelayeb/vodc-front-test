import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';


export default function Chat({ onClose, children, botAvatar, steps, headerTitle }) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [chatBotSize, setChatbotSize] = useState({});
  const [bubbleStyle, setBubbleStyle] = useState({});
  const [bubbleOptionStyle, setBubbleOptionStyle] = useState({});
  


  const [state, setState] = useState({
    opened: true
  })

  const { opened } = state;

  const toggleFloating = () => {
    setState({
      opened: false
    });
    onClose();
  }

  useEffect(() => {
    getChatBotSize()
    setIsBrowser(true)
    
  }, []);


  function getChatBotSize() {
   
    var bubbleStyle = { minWidth: '80%' }
    var bubbleOptionStyle = { backgroundColor: "white", color: "#F16E00", border: '1px solid #F16E00', width: "430px" ,marginLeft:'16px'}
    var chatBotSize = { borderRadius: "0px", top: "-720px", left: "60%", height: "-70%", width: "470px" ,height:"760px"}
    if ((window.innerWidth < 900) && (window.innerWidth > 500)) {
      chatBotSize.left = "40%"
    }
    if (window.innerWidth < 400)  {
      // chatBotSize.marginRight = "5%"
      chatBotSize.marginLeft = "6%"
      chatBotSize.left = "20%"
      chatBotSize.top = "70%"
      chatBotSize.height = "800px"
      chatBotSize.width = "100%"
      bubbleStyle.minWidth = "80%"
      bubbleOptionStyle.width = "250px"
    }
    setBubbleStyle(bubbleStyle)
    setChatbotSize(chatBotSize)
    setBubbleOptionStyle(bubbleOptionStyle)
  }
  const theme = {
    background: 'white',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#DDDDDD',
    botFontColor: '#000000',
    userBubbleColor: '#F16E00',
    userFontColor: '#ffffff',
    outerWidth: '26px',
  };



  const modalContent = (
    <div>
  
      <ThemeProvider theme={theme} >
        <ChatBot className="modalanimation " 
          style={chatBotSize}
          botDelay="1300"
          bubbleOptionStyle={bubbleOptionStyle}
          
          bubbleStyle={bubbleStyle}
          hideUserAvatar
          botAvatar={botAvatar}
          headerTitle={headerTitle}
          floating={true}
          opened={opened}
          toggleFloating={toggleFloating}
          // enableMobileAutoFocus
          footerStyle={{  visibility: 'hidden' }}
          enableSmoothScroll={true}
          //speechSynthesis={{ enable: true, lang: 'fr' }}
          steps={steps}
        />
      </ThemeProvider>


      <link rel="stylesheet" href="../../css/style.css" />
      {/* <div className="modalbody">{children}</div> */}
    </div>

  );


  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    )
  } else {
    return null;
  }
}

