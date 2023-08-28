import React, { useState, useEffect } from "react";
import { Card } from "antd";
const { Meta } = Card;
import axios from "axios";
import Link from "next/link";

export default function ListCard({countryCode}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_URL ="https://www.orangedigitalcenters.com/api/v1/client/country/TN/event/";
  useEffect(() => {
    axios
      .get(api_URL)
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const monthNames = [ "janv.","févr.", "mars", "avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
    const month = monthNames[date.getMonth()];
    const day = date.getDate().toString().padStart(2, "0");

    return `${month} ${day}`;
  }

  function formatAvatarDate(dateStr) {
    const date = new Date(dateStr);
    const monthNames = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');

    return (
      <>
        <span className="month">{month}</span>
        <br></br>
        <span className="day">{day}</span>
      </>
    );
  }

  function formatTime(timeStr) {
    const time = new Date(timeStr);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, "0");

    return `${hours}:${minutes}${meridian}`;
  }
  
  if (loading) {
    return (
      <>
        <Card style={{ height: "460px", borderRadius: "0%" }}>
          <video
            style={{
              height: "120px",
              width: "120px",
              display: "block",
              margin: "auto",
            }}
            src="../audio/spinner.mp4"
            autoPlay
            loop
          ></video>
        </Card>
        <br></br>
      </>
    );
  } 
  else if (events.length === 0) {
    return (
      <Card style={{ height: '160px', borderRadius: '0%' }} className="Card">
        <Meta
          title={<div className="Cardtitle">Il n'y a aucun évènement prévu à cette date!</div>}
          avatar={<img src="../images/No event@2x.png" height="50px" width="50px"  marginLeft="50%"  marginRight="50%" />}
          description={<div className="CardDesc">Veuillez réessayer ultérieurement.</div>}
        />
      </Card>
    );
  } else {
    return (
      <div>
        {events.map((event, index) => (
          <Link href={`${api_URL}/${event._id}`} target="_blank" key={index}>
            <Card
              key={index}
              style={{ height: "460px", borderRadius: "0%" }}
              className="Card"
            >
              <Meta
                avatar={<div>{formatAvatarDate(event.startDate)}</div>}
                title={
                  <h5 className="Cardtitle">{event.translations.fr.title}</h5>
                }
                description={
                  <div className="CardDesc">
                    {`De ${formatDate(event.startDate)} à ${formatTime(
                      event.startDate
                    )}`}
                    <br></br>
                    {`À ${formatDate(event.endDate)} à ${formatTime(
                      event.endDate
                    )}`}
                    <br></br>
                    {`by ${event.categories}`}
                  </div>
                }
              />
            </Card>
          </Link>
        ))}
        <br></br>
        <link rel="stylesheet" href="../../css/style.css" />
      </div>
    );
  }
}
