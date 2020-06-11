import {combineReducers} from 'redux'
import alert from './alert'
import pokemon from './pokemon'
import filters from './filter'

export default combineReducers({
  alert,
  pokemon,
  filters,
 
})