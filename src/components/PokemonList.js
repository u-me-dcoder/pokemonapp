import React from "react";
import capitalize from "../helpers/capitalize";
import PokemonCard from "./PokemonCard";
export default function PokemonList({ list }) {
  let pokemonList = list.map((pokemon) => {
    let { types, order, id, sprites } = pokemon;
    let pokename = capitalize(pokemon.name);

    return (
      <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={order}>
        <PokemonCard
          id={id}
          sprites={sprites}
          pokemon={pokename}
          types={types}
        />
      </div>
    );
  });
  return (
    <div className="container-fluid p-0">
      <div className="row">{pokemonList}</div>
    </div>
  );
}
