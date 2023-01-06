import React from "react"

function Pokecard (props) {

    let imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div className="Pokecard">
            <h4 className="PokecardName">{props.name}</h4>
            <img className="PokecardSprite" src = {imageSrc}/>
            <p className="PokecardType">Type:{props.type}</p>
            <p className="PokecardExp">EXP:{props.exp}</p>
        </div>
    )
}

export default Pokecard