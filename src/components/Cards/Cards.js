import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      return (
        <Link to={`${"/"}${x.id}`} key={x.id} className="cards-item ">
          <div className="">
            <span>Name : {x.name}</span>
          </div>
          <span>Status : {x.status}</span>
        </Link>
      );
    });
  } else {
    display = "No Characters Found";
  }
  return <div className="cards">{display}</div>;
};

export default Cards;
