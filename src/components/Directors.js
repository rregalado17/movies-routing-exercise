import React from "react";
import { directors } from "../data";

function Directors() {
  
  const directorName = directors.map((director, index) => {
      return (
        <div key={index}>
          <p>Director's Name: {director.name} <br/>
          Movies: {(director.movies).map((m, index) => {
            return (
              <li key={index}>
                {m}
              </li>
            )
          })} </p>
        </div>
      )
    }
  )
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorName}
    </div>
  );
}

export default Directors;
