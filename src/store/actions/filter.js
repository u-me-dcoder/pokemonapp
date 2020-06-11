
import axios from 'axios'
import {SET_TEXT_FILTER,SET_GENDER_FILTER,SET_HABITAT_FILTER} from '../types'



export const setText = (text)=>async dispatch =>{
  try {
   
    dispatch({
      type:SET_TEXT_FILTER,
      payload:text
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}



export const setGender = (type)=>async dispatch =>{
  try {
   
    dispatch({
      type:SET_GENDER_FILTER,
      payload:type
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}


export const setHabitat = (habitat)=>async dispatch =>{
  try {
   
    dispatch({
      type:SET_HABITAT_FILTER,
      payload:type
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}