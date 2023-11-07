function pokeCard(pokemon){
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return <div className ="pokeCard">
        <h4 className = "pokeName">{pokemon.name}</h4>
        <img src = {imgURL} className = "pokeImg">
        </img>
        <h6 className = "pokeData">Type: {pokemon.type}<br></br>
        EXP: {pokemon.base_experience}</h6>
    </div>
}

export {pokeCard}