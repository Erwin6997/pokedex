import React,{useState} from "react";

const CaughtPokemon = (props) => {

  const [totalCaught, setTotalCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  // const [caughtPokemon, setCaughtPokemon] = useState([]);
  const incrementTotal =() =>{
    const s = totalCaught.concat(pokemonNameInput);
        setTotalCaught(s)
        setPokemonNameInput("")
  }
  const handleInputChange =(event) => {
    console.log(event.target.value);
    setPokemonNameInput(event.target.value)
  }
  return(
    <div>
      <p>Caught {totalCaught.length} Pokemon on {props.date}</p>
      <ul>
        {
          totalCaught.map((element , index) => {
            return <li key={index}>{element}</li>
          })
        }
      </ul>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
      <button onClick={incrementTotal}> Add </button>
    </div>
    
    ) 
};
export default CaughtPokemon;