import { GET_POKEMON,SHOW_POKEMON, FETCH_ERROR} from '../types'

const initialState = {
  pokemon: null,
  pokemons: [],

  loading: true,
  error: {}
}


export default function(state=initialState,action){
  const {type,payload} =action
  switch(type){
    case GET_POKEMON:
      return {...state,pokemons:payload}
    case SHOW_POKEMON:
      return {...state,pokemon:payload}
    case FETCH_ERROR:
    return {...state,error:payload}
    default: 
      return state
  }
}