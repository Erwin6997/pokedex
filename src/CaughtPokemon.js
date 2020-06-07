import React,{useState} from "react";

const CaughtPokemon = (props) => {

  const [totalCaught, setTotalCaught] = useState(2);
  const incrementTotal =() =>{
        setTotalCaught(totalCaught + 1)
  }
  return(
    <div>
      <p>Caught {totalCaught} Pokemon on {props.date}</p>
      <button onClick={incrementTotal}> Add </button>
    </div>
    
    ) 
};

export default CaughtPokemon;
