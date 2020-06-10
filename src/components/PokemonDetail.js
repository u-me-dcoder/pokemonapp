import React from 'react';



export default function PokemonDetail(props) {
  console.log(props)
  let id= props.computedMatch.params.id
  return (
    <div>
      This is the pokemon Detail Page {id}
    </div>
  );
}
