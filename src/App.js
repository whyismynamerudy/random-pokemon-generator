import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from './components/display/Display';

function App() {

  const [pokeData, setPokeData] = useState({});

  const fetchPokeData = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
    //console.log("data received", data["results"]);
    const [...pokeArray] = data["results"];
    //console.log(typeof pokeArray);
    setPokeData(pokeArray); //needs to be this instead of .results because in response its "results"
  };

  useEffect(() => {
    // axios
    // .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    // .then((response) => {
    //   //console.log(response.data.results); 
    //   setData(response.data.results); //can directly access individual pokemon from index
    //   console.log(data); //prints out empty array becuase axios is async function
    // })
    fetchPokeData();
  },[]);

  return (
    <div className="App">
        <Display pokeData={pokeData} />
        {/* {JSON.stringify(pokeData)} */}

    </div>
  );
}

export default App;
