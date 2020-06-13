import React from 'react';


import {connect} from 'react-redux'
import {images} from '../utils/type'
import {setType} from '../store/actions/filter'
import ReactTooltip  from 'react-tooltip'
  
import Logo from '../assets/pokemon.svg'

 function Sidebar({types,setType,filters}) {




  let list = types.map((type)=>{
    let handleClick =name=>name===filters.type ? setType('') : setType(name)
      
    return(
      <li key={type.name}  >
        <button aria-expanded={filters.type===type.name ? true :false} onClick={()=>handleClick(type.name)}  className={`btn badge  bg-${type.name}`} data-tip={type.name}  >
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
  types:state.pokemon.types,
  filters:state.filters
})

export default connect(mapDispatchToProps,{setType})(Sidebar)
