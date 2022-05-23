import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Display from './components/display/Display';

function App() {

  const [data, setData] = useState([]);

  const fetchPokeData = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
    setData(data.results);
  };

  useEffect(() => {
    // axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    // .then((response) => {
    //   //console.log(response.data.results); 
    //   setData(response.data.results); //can directly access individual pokemon from index
    //   console.log(data); //prints out empty array becuase axios is async function
    // })
    fetchPokeData();
  },[]);

  return (
    <div className="App">
        <Display pokeData={data} />
    </div>
  );
}

export default App;
