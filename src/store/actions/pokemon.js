
import axios from 'axios'
import {GET_POKEMON,SHOW_POKEMON,FETCH_ERROR,GET_TYPE} from '../types'



export const getAllPokemon = ()=>async dispatch =>{
  try {
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    //let res = await axios.get('https://pokeapi.co/api/v2/pokemon')
    let allpokemon = await loadPokemon(res.data.results)
    let typeresponse = await axios.get('https://pokeapi.co/api/v2/type')
      .then(res=>{
        dispatch({
          type:GET_POKEMON,
          payload:allpokemon
        })
        return res.data.results
      })

      dispatch({
        type:GET_TYPE,
        payload:typeresponse
      })
    
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}



 const loadPokemon = async data =>{

  let pokemonData = await Promise.all(
    data.map(async pokemon =>{
      let pokemonEntry = await getPokemon(pokemon.url)
      return pokemonEntry
    })
  )
 return pokemonData
}


export const getPokemon =async (url)=>{

  let res =await axios.get(url)
  return res.data
}




export const showPokemon = id=>async dispatch =>{
  let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  dispatch({
    type:SHOW_POKEMON,
    payload:res.data
  })
}
