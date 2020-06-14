import React from "react";
import { v4 as uuidv4 } from "uuid";
import capitalize from '../helpers/capitalize'

export default function PokemonAbility(props) {

let abilities= props.data

let abilityList = abilities.map(item=>{
  let {ability} = item


  return(
    <li key={uuidv4()}>
      {capitalize(ability.name)}
    </li>
  
  )
})




 
  return <ul className="list ability-list">{abilityList}</ul>;
}
