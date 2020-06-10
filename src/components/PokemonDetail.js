import React from 'react';
import {Link} from 'react-router-dom'


export default function PokemonDetail(props) {
  console.log(props)
  let id= props.computedMatch.params.id
  return (
    <div className="overview">

      <Link to="/">Go Back</Link>

      <div className="overview-card">
        
      </div>
    </div>
  );
}
