import { GET_POKEMON,SHOW_POKEMON, FETCH_ERROR,ADD_FAVORITE,REMOVE_FAVORITE,GET_TYPE} from '../types'

const initialState = {
  pokemon: undefined,
  pokemons: [],
  favorites:[],
  types:[],
  loading: true,
  error: {}
}


export default function(state=initialState,action){
  const {type,payload} =action
  switch(type){
    case GET_POKEMON:
      return {...state,pokemons:payload}
    case SHOW_POKEMON:
      return {...state,pokemon:payload,loading:false}
    case ADD_FAVORITE:
      return{...state,favorites:[payload,...state.favorites],loading:false}
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites:state.favorites.filter(favorite=> favorite.id !==payload),
        loading:false,
      }
    case GET_TYPE:
      return{
        ...state,
        types:payload,
        loading:false
      }
    case FETCH_ERROR:
    return {...state,error:payload}
    default: 
      return state
  }
}