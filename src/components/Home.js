import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getAllPokemon } from "../store/actions/pokemon";

import Sidebar from "../UI/Sidebar";
import Favorite from "../UI/Favorite";
import { images } from "../utils/type";
import {Link} from 'react-router-dom'

import Loading from "./Loading";

import Pokeball from "../assets/ball.svg";
function Home({ getAllPokemon, pokemon: { loading, pokemons } }) {
  useEffect(() => {
    getAllPokemon();
  }, [getAllPokemon]);

  if (loading) {
    return <Loading />;
  }

  let pokemonList = pokemons.map((pokemon) => {
    console.log(pokemon)
    let { types, order } = pokemon;
    let pokename = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    return (
      <div className="col-lg-2" key={order}>
        <Link to={`pokemondetail/${pokemon.id}`} className="card">
          <img
            src={pokemon.sprites.front_default}
            alt={pokename}
            className="sprite"
          />
          <button className="btn favorite">
            <img src={Pokeball} alt="Catch" />
          </button>
          <h6>{pokename}</h6>
          <div className="types">
            {types.map((data, i) => {
              let { name } = data.type;

              return (
                <div className={`badge bg-${name}`} key={i} data-tip={name}>
                  <img src={images[name]} alt={pokename} />
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="home">
      <Sidebar />

      <section>
        <Favorite />
        <header>
          <div className="form-group">
            <div className="form-group-icon">
              <input type="text" className="form-control" />
            </div>
          </div>
        </header>
        <main>
          <div className="container-fluid p-0">
            <div className="row">{pokemonList}</div>
          </div>
        </main>
      </section>
    </div>
  );
}

const mapDispatchToProps = (state) => ({
  pokemon: state.pokemon,
});

export default connect(mapDispatchToProps, { getAllPokemon })(Home);
