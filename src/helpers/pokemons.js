export default (pokemons,{text,habitat,gender,region,type})=>{
    
    return pokemons.filter(pokemon=>{
     
        const textMatch = pokemon.name.toLowerCase().includes(text.toLowerCase())
        if(type===''){
            return textMatch
        }
        let newArrary =pokemon.types.filter(data=>data.type.name===type)
        
        let typeMatch = newArrary.length>0 ? false :true
        
        return textMatch && !typeMatch
    })

   
}