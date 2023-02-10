import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-img" src={props.imageUrl} />
      <div className="card-info">
        <span className="location">
          <i class="fa-solid fa-location-dot"></i> {props.location}
        </span>
        <span className="location-link">
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h2 className="card-header">{props.title}</h2>
        <span className="card-dates">
          {props.startDate}
          {props.endDate}
        </span>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
