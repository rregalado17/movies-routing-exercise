import React from "react";
import { actors } from "../data";

function Actors() {

  const actorName = actors.map((actor, index) => {
    return (
      <div key={index}>
        <p>Actor's Name: {actor.name} <br/>
        Movies: {(actor.movies).map((m, index) => {
          return (
            <li key={index}>
              {m}
            </li>
          )
        })}</p>
      </div>
    )
  }
  )

  return (
    <div>
      <h1>Actors Page</h1>
      {actorName}
    </div>
  );
}

export default Actors;
