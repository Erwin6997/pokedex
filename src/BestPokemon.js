import React,{useState, useEffect} from "react";

const BestPokemonFetcher = (props) =>{
  const [bestPokemon,setBestPokemon] = useState(null);
  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then(res => res.json())
    .then(data => setBestPokemon(data));
  }, [props.pokemonId])
    if (!bestPokemon) {
      return null 

    }else{
      return <BestPokemon pokemon={bestPokemon} />
    }
}
function BestPokemonSelector() {
  const [pokemonId, setPokemonId] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId(1);
  }
  function handleCharmanderClick() {
    setPokemonId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
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

export default BestPokemonSelector;