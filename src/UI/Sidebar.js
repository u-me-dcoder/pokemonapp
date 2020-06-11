import React from 'react';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {images} from '../utils/type'
  


 function Sidebar({types}) {




  let list = types.map((type)=>{

    return(
      <li key={type.name}  >
        <Link to="/" className={`badge bg-${type.name}`}  >
          <img src={images[type.name]} alt={type.name}/>
        </Link>
 
       
      </li>
    )
  })
  return (
    <aside>
    <div className="logo"></div>

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
