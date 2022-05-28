import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from "../button/Button"
import Image from "../image/Image"

const Display = (props) => {

  const [pokemon, setPokemon] = useState({});
  const [pokeImage, setPokeImage] = useState("");
  const [pokeName, setPokeName] = useState("");

  const chooseRandomPokemon = () => {
    const index = Math.floor(Math.random() * 150); //last index is 150
    setPokemon(props.pokeData[index]); //use random index to choose a pokemon from props
    //console.log("pokedata", props.pokeData[index]);
    //setPokeName(props.pokeData[index]["name"]);
  };

  const fetchPokemon = async (myPokemon) => {
      const details = await axios.get(myPokemon["url"]);
      //setPokeImage(details["data"]["sprites"]["front_default"]);
      setPokeImage(details["data"]["sprites"]["other"]["official-artwork"]["front_default"]);
      setPokeName(details["data"]["name"]);
      //console.log(details["data"]["sprites"]["front_default"]);
  };

  useEffect(() => {
      //console.log(props.pokeData);
      chooseRandomPokemon();
  },[props.pokeData]); //thus this effect runs when the data from the api is fetched

  useEffect(() => {
      fetchPokemon(pokemon);
      //console.log(pokemon);
  },[pokemon]);

  //const name = pokemon["name"];

  return (
    <div className="display">
        {/* {JSON.stringify(pokemon)} */}
        <div className="image-container">
            <Image src={pokeImage}/>
        </div>
        <div className="button-container">
            <Button name={pokeName} onClick={chooseRandomPokemon}/>
        </div>
    </div>
  )
}

export default Display