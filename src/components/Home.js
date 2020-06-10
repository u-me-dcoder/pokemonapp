import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {getAllPokemon} from '../store/actions/pokemon'
function Home({getAllPokemon}) {
  

  useEffect(()=>{
   getAllPokemon()
  },[getAllPokemon])

  return (
    <div>
      This is the Hompage listing
    </div>
  );
}



const mapDispatchToProps = state =>({
  pokemon:state.pokemon
})


export default connect(mapDispatchToProps,{getAllPokemon})(Home)




