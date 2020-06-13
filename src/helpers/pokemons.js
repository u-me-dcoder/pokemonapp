export default (pokemons,{text,habitat,gender,region})=>{
    console.log('inside select function',pokemons)
    return pokemons.filter(pokemon=>{
        const textMatch = pokemon.name.toLowerCase().includes(text.toLowerCase())
        return textMatch
    })

    console.log(text)
}