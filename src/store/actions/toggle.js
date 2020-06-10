
import {SET_TOGGLE, TOGGLE_SHORTCUT, TOGGLE_HEADER} from '../types'

export  const setToggle = () =>dispatch =>{
  dispatch({
    type:SET_TOGGLE,
    
  })
}


export  const toggleShortcut = () =>dispatch =>{
  dispatch({
    type:TOGGLE_SHORTCUT,   
  })
}
export  const toggleHeader = () =>dispatch =>{
  dispatch({
    type:TOGGLE_HEADER,   
  })
}



