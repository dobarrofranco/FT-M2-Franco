import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return (
    <div>
      <h2>Species</h2>
      
      {species.map((animal, key) => {
        return (<button key={key} onClick={handleSpecies} value={animal}>
          {animal}
        </button>)
      })}
      
      <button onClick={handleAllSpecies}>All Animals</button>

    </div>
  )
}
