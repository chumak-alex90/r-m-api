import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CardDitails = () => {
  let { id } = useParams();
  let [fatchedData, updateFatchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFatchedData(data);
    })();
  }, [api]);
  return (
    <div className="container d-flex justify-content-center ">
      <div className="d-flex flex-column gap-2">
        <h2 className="text-center">{fatchedData.name}</h2>
        <img src={fatchedData.image} alt="" className="img-fluid" />
        <div className="bedge bg-info">{fatchedData.status}</div>
        <div className="content">
          <div className="">
            <span>Gender : </span>
            {fatchedData.gender}
          </div>
          <div className="">
            <span>Spacies : </span>
            {fatchedData.species}
          </div>
          <div className="">
            <span>Location : </span>
            {fatchedData.location?.name}
          </div>
          <div className="">
            <span>Created : </span>
            {fatchedData.created}
          </div>
        </div>
        <Link to="/" className="d-flex justify-content-center">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CardDitails;
