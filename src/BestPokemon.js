import React,{useState, useEffect} from "react";

const BestPokemonFetcher = () =>{
  const [bestPokemon,setBestPokemon] = useState(null);
  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(res => res.json())
    .then(data => setBestPokemon(data));
  }, [])
    if (!bestPokemon) {
      return null 

    }else{
      return <BestPokemon pokemon={bestPokemon} />
    }
}
const BestPokemon = (props) => {
console.log("data:"+props.pokemon);
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {props.pokemon.abilities.map((abiliti, index) => (
          <li key={index}>{abiliti.ability.name}</li>
        
        ))}
      </ul>
    </div>
  );
};

export default BestPokemonFetcher;