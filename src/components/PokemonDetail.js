import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showPokemon } from "../store/actions/pokemon";
import Loading from "./Loading";
import { images } from "../utils/type";
import { v4 as uuidv4 } from "uuid";
import capitalize from "../helpers/capitalize";

const TypesBadge = ({ name }) => {
  return (
    <div className={`badge-name bg-${name}`}>
      <img src={images[name]} alt={name} />
      <span>{capitalize(name)}</span>
    </div>
  );
};

function PokemonDetail(props) {
  let { showPokemon, pokemons } = props;
  let id = props.computedMatch.params.id;
  let { loading, pokemon } = pokemons;

  useEffect(() => {
    showPokemon(id);
  }, [showPokemon, id]);
  if (loading && pokemon == null) {
    return <Loading />;
  }

  let { name, sprites, stats, types, moves, abilities } = pokemon;
  let primaryType = types[0].type;
  console.log(pokemon);

  return (
    <div className={`overview gradient-${primaryType.name}`}>
      <Link to="/">Go Back</Link>

      <div className="overview-card">
        {sprites.front_default != null && (
          <img src={sprites.front_default} className="sprite" />
        )}

        <h6 className="title">{capitalize(name)}</h6>
        <div className="d-flex list-inline justify-content-center">
          {types.map((types) => {
            return <TypesBadge key={uuidv4()} name={types.type.name} />;
          })}
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-poison"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (state) => ({
  pokemons: state.pokemon,
});

export default connect(mapDispatchToProps, { showPokemon })(PokemonDetail);
