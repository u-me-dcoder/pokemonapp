import React from 'react'
import Pokeball from "../assets/ball.svg";
import {Link} from 'react-router-dom'
import {images} from '../utils/type'
export default function PokemonCard(props) {
    let {id,sprites,pokemon,types} = props
    return (
        <Link to={`pokemondetail/${id}`} className="card">
        <img
          src={sprites.front_default}
          alt={pokemon}
          className="sprite"
        />
        <button className="btn favorite">
          <img src={Pokeball} alt="Catch" />
        </button>
        <h6>{pokemon}</h6>
        <div className="types">
          {types.map((data, i) => {
            let { name } = data.type;

            return (
              <div className={`badge bg-${name}`} key={i} data-tip={name}>
                <img src={images[name]} alt={pokemon} />
              </div>
            );
          })}
        </div>
      </Link>
    
    )
}
