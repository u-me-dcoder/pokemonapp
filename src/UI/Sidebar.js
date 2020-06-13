import React from 'react';


import {connect} from 'react-redux'
import {images} from '../utils/type'
import ReactTooltip  from 'react-tooltip'
  
import Logo from '../assets/pokemon.svg'

 function Sidebar({types}) {




  let list = types.map((type)=>{

    return(
      <li key={type.name}  >
        <button   className={`btn badge  bg-${type.name}`} data-tip={type.name}  >
          <img src={images[type.name]} alt={type.name}/>
        </button>
 
       
      </li>
    )
  })
  return (
    <aside>
      <ReactTooltip/>
    <div className="logo">


      <img src={Logo} alt="Pokedex App"/>

    </div>

    <ul className="list list-type mt-3">
     {list}
    </ul>

  </aside>
  );
}

const mapDispatchToProps = state =>({
  types:state.pokemon.types
})

export default connect(mapDispatchToProps,null)(Sidebar)
