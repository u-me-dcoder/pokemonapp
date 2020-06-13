

import {SET_TEXT_FILTER,SET_GENDER_FILTER,SET_HABITAT_FILTER,FETCH_ERROR,SET_REGION_FILTER,SET_TYPE_FILTER} from '../types'



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



export const setGender = (gender)=>async dispatch =>{
  try {
   
    dispatch({
      type:SET_GENDER_FILTER,
      payload:gender
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
      payload:habitat
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}

export const setRegion = (region)=>async dispatch =>{
  try {
   
    dispatch({
      type:SET_REGION_FILTER,
      payload:region
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}

export const setType = (type)=>async dispatch =>{
  console.log(type)
  try {
   
    dispatch({
      type:SET_TYPE_FILTER,
      payload:type
    })
  
  } catch (e) {
    dispatch({
      type:FETCH_ERROR,
      payload: e
    })
  }
}