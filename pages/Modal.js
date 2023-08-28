import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ListCard from '../public/components/ListCard';

export default function Modal({ showCal, onClose, children }) {

    const [isBrowserCalendar, setIsBrowserCalendar] = useState(false);

    useEffect(() => {
        setIsBrowserCalendar(true)
    }, []);

    const handleClose = (e) => {
        e.preventDefault();

        document.getElementById("calendar-elem").classList.remove("animate-bottom")
        document.getElementById("calendar-elem").classList.add("animate-top")

        /*document.getElementById("calendar-elem").addEventListener("animationend",(e)=>{
            onClose()    
        })*/

        setTimeout(() => {

            onClose()

        }, 500);

    };

    const modalContentt = showCal ? (
        <div className="overlay " >
            <div id='calendar-elem' className="modal animate-bottom ">
                <div className="modalheader">
                    <a href="#" onClick={handleClose}>
                      
                      
                    </a>
                </div>
                <p className='content'>This is the list of all the upcoming events at Orange Digital Center</p>
                <ListCard />
               
                

                <div className="modalbody">{children}</div>
            </div>
            <link rel="stylesheet" href="../../css/style.css" />
        </div>

    ) : null;

    if (isBrowserCalendar) {
        return ReactDOM.createPortal(
            modalContentt,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}
