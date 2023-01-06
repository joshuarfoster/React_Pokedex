import React from "react";
import Pokecard from "./Pokecard";

function Pokedex (props) {
    return (
        <div calssName="Pokedex">
            <h2 className="PokedexTitle">Pokedex</h2>
            <div classname="PokeDexCards">
                {props.pokemon.map( p => (<Pokecard id={p.id} name={p.name} type ={p.type} exp={p.base_experience}/>))}
            </div>
        </div>
    )
}

export default Pokedex