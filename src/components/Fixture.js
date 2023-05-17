import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import PL from "./images/PL.png";
import SeriaA from "./images/SERIA-A.png";
import LaLiga from "./images/laliga.png";

const Fixture = () => {
  const [matches, setMatches] = useState();
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
          setMatches(data);
          setPending(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="fixture">
      <div className="loading-div">
        {pending && (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        )}{" "}
      </div>
      {matches &&
        matches.map((match) => (
          <ul className="container-clubs" key={uuid()}>
            <span>
              {match.competition.name === "ENGLAND: Premier League" ? (
                <Link
                  className="leagueLink"
                  to={match.competition.url}
                  target="_blank"
                >
                  <img src={PL} alt="ENGLAND: Premier League" />
                </Link>
              ) : null || match.competition.name === "ITALY: Serie A" ? (
                <Link
                  className="leagueLink"
                  to={match.competition.url}
                  target="_blank"
                >
                  <img src={SeriaA} alt="ITALY: Serie A" />{" "}
                </Link>
              ) : null || match.competition.name === "SPAIN: La Liga" ? (
                <Link
                  className="leagueLink"
                  to={match.competition.url}
                  target="_blank"
                >
                  <img src={LaLiga} alt="SPAIN: La Liga" />
                </Link>
              ) : null}
            </span>

            <li className="league-li">
              <Link
                className="leagueLink"
                to={match.competition.url}
                target="_blank"
              >
                {match.competition.name}
              </Link>
            </li>

            <li className="club-name-li left">
              <Link to={match.side1.url} target="_blank">
                {match.side1.name}
              </Link>
            </li>
            <li className="club-name-li right">
              <Link to={match.side2.url} target="_blank">
                {match.side2.name}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Fixture;
