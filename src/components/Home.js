import React, { useEffect} from "react";
import { connect } from "react-redux";
import { getAllPokemon } from "../store/actions/pokemon";
import selectPokemon from '../helpers/pokemons'
import Sidebar from "../UI/Sidebar";

import Header from "../UI/Header";

import Loading from "./Loading";
import PokemonList from "./PokemonList";

function Home({ getAllPokemon, pokemon: { loading, pokemons },filters }) {
 
  useEffect(() => {
    getAllPokemon();
 
  }, [getAllPokemon]);

  if (loading) {
    return <Loading />;
  }



  

  return (
    <div className="home">
      <Sidebar />

    
      <section>
        {/* <Favorite /> */}
        <Header/>
        <main>
          <PokemonList list={selectPokemon(pokemons,filters)}/>
        </main>
      </section>
    </div>
  );
}

const mapDispatchToProps = (state) => ({
  pokemon: state.pokemon,
  filters:state.filters
  
});

export default connect(mapDispatchToProps, { getAllPokemon })(Home);
