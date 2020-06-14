import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showPokemon } from "../store/actions/pokemon";
import Loading from "./Loading";
import {BsArrowLeft} from 'react-icons/bs'

import OverviewCard from "./OverviewCard";

function PokemonDetail(props) {
  console.log(props);
  let { showPokemon, pokemons } = props;
  let id = props.computedMatch.params.id;
  let {  pokemon } = pokemons;

  useEffect(() => {
    showPokemon(id);
  }, [showPokemon,id]);
  if (pokemon === undefined) {
    return <Loading />;
  } else {
    let { name, sprites, stats, types, moves, abilities } = pokemon;
    let primaryType = types[0].type;

    return (
      <div className={`overview gradient-${primaryType.name}`}>
        <Link to="/" className={`overview-return d-none d-sm-flex text-${primaryType.name}`}> <BsArrowLeft/></Link>
        <OverviewCard
          sprites={sprites}
          name={name}
          types={types}
          stats={stats}
          typing={primaryType}
          moves={moves}
          abilities={abilities}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (state) => ({
  pokemons: state.pokemon,
});

export default connect(mapDispatchToProps, { showPokemon })(PokemonDetail);
