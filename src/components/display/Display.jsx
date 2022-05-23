import React from 'react'
import { useState, useEffect } from 'react'
import Button from "../button/Button"
import Image from "../image/Image"

const Display = ({ pokeData }) => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const index = Math.floor(Math.random() * 150); //last index is 150
    setPokemon(pokeData[index]); //use random index to choose a pokemon from props
    // console.log(pokemon);
  },[]);

  return (
    <div className="display">
        {JSON.stringify(pokemon)}
        <div className="image-container">
            <Image src={pokemon}/>
        </div>
        <div className="button-container">
            <Button src={pokemon}/>
        </div>
    </div>
  )
}

export default Display