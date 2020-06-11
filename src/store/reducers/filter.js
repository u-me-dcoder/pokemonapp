import { SET_TEXT_FILTER,SET_GENDER_FILTER,SET_HABITAT_FILTER} from '../types'


const initialState ={
  text:'',
  gender:'',
  habitat:'',
  region:'',

}

export default function(state=initialState,action){
  const {type,payload} =action
  switch(type){
    case SET_TEXT_FILTER:
      return {...state,text:payload}
    case SET_GENDER_FILTER:
      return {...state,gender:payload}
    case SET_HABITAT_FILTER:
      return {...state,habitat:payload}
    default: 
      return state
  }
}