import React,{useState} from "react";
import { v4 as uuidv4 } from "uuid";
import capitalize from '../helpers/capitalize'

export default function PokemonMoves(props) {
  let moveType = [];
  let moveMethod = []
  
  let { data } = props;
 
  data.map((item) => {
    let {move,version_group_details} = item
    let method = version_group_details[0].move_learn_method
    !moveType.includes(method.name) && moveType.push(method.name)
     moveMethod.push({name:method.name,move:[move.name]}) 
  });

 


    
 
  let moveList = moveType.map((type,i)=>{
    

    let move = moveMethod.map(item=>{
      
      let {move} = item
      return(
        <li key={uuidv4()}>{capitalize(move[0])}</li>
      )
    })

    
   let handleClick = e =>{
     let target = e.target
     let sibling = target.nextSibling
     sibling.classList.toggle('collapse')
   
   }
    return(

      <div className="move-item" key={uuidv4()}>
        <h6  onClick={e=>handleClick(e)}>{capitalize(type)}</h6>
        <ul className="list move-list collapse" id={type}>
         {move}
        </ul>
      </div>
    )
  })






 
  return <div>{moveList}</div>;
}
