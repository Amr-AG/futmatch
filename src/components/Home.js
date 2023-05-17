import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import uuid from "react-uuid";

const Home = () => {
  const [clubs, setClubs] = useState();
  const [pending, setPending] = useState(true);

  const url = "https://free-football-soccer-videos.p.rapidapi.com/";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ad9dab5218msh5f10453d4213b77p13c4cejsn9bc0a7a45bfa",
        "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setClubs(data);
          setPending(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="cardContainer">
      {pending && (
        <div className="loading-div">
          {pending && (
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      )}
      {clubs &&
        clubs.map((club) => (
          <div className="card" key={uuid()}>
            <h3>Competition: {club.competition.name}</h3>

            <h4>Fixture: {club.title}</h4>
            <a href={club.url} target="target-link">
              {
                <img
                  src={club.thumbnail}
                  alt={
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  }
                />
              }
            </a>

            <h5>
              Match Date:{" "}
              {club.date.replace("T", ` Time `).replace(":00+0000", " ")}
            </h5>
          </div>
        ))}
    </div>
  );
};

export default Home;
