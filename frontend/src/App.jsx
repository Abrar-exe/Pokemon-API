import { use, useState } from "react";

function App() {

const [pika , Setpika] = useState(null)
const [PokemonName , SetPokemoname]=useState("")
async function callAPI(){
const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+PokemonName)
const data = await response.json();
Setpika(data.sprites.front_shiny)

}
  return  ( 

  <div className="maindiv">
<h1>Pokemon API</h1>
<div className="innerelements">
  <input placeholder="Enter Pokemon Name " value={PokemonName} onChange={(event) => SetPokemoname(event.target.value)}/>
  <button onClick={callAPI}>Check</button>
  
  
 
</div>
<div className="PokemonImage">
    {pika && <img src ={pika} alt="Pokemon" id="pokemonsprite" />}
  </div>
  </div>
  );
 
}

export default App;
