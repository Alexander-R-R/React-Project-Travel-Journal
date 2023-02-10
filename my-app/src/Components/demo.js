 import React from "react";
 import StarImg from "../images/star.png";

 export default function Card(props) {
   let badgeText;
   if (props.openSpots === 0) {
     badgeText = "SOLD OUT";
   } else if (props.location === "Online") {
     badgeText = "ONLINE";
   }

   return (
     <div className="card-container">
       {badgeText && <div className="card-badge">{badgeText}</div>}
       <img className="card-img" src={props.coverImg} />
       <div className="card-stats">
         <img className="star-img" src={StarImg} />
         <span>{props.stats.rating}</span>
         <span className="gray"> ({props.stats.reviewCount}) · </span>
         <span className="gray">{props.location}</span>
       </div>
       <p className="card-title">{props.title}</p>
       <p className="card-price">
         {" "}
         <b>From ${props.price}</b> / person
       </p>
     </div>
   );
 }
