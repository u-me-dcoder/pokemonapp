import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { getAllPokemon } from '../store/actions/pokemon'
import { Link } from 'react-router-dom'
import Sidebar from '../UI/Sidebar'
import Favorite from '../UI/Favorite'
import { types, colors,images } from '../utils/type'
import classNames from 'classnames'
import Loading from './Loading'
function Home({ getAllPokemon, pokemon:{loading,pokemons} }) {


  useEffect(() => {
    getAllPokemon()
  }, [getAllPokemon])

  if (loading) {
    return <Loading/>
  }

  let pokemonList = pokemons.map(pokemon=>{
    return(
      <div className="col-lg-2" key={pokemon.order}>
                <div className="card">
                  <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                  <i className="favorite"></i>
                  <h6>{pokemon.name}</h6>
                  <div className="types">
                  {pokemon.types.map((type,i)=>{
                    let {name}= type
                    return (
                      <div className={`badge bg-${name}`} key={i} >
                        <img src={images.name} alt={pokemon.name}/>
                      </div>
                    )
                  })}
                    
                
                  </div>
                </div>
              </div>
    )
  })
  
  return (
    <div className="home">
      <Sidebar />

      <section>
        <Favorite />
        <header>
          <h6 className="text-white">PokeDex</h6>

          <div className="form-group">
            <div className="form-group-icon">
              <input type="text" className="form-control" />
            </div>
          </div>
        </header>
        <main>
          This is the Hompage listing
        <div className="container-fluid">
            <div className="row">
              {pokemonList}
            </div>
          </div>
        </main>
      </section>
    </div>

  )

}



const mapDispatchToProps = state => ({
  pokemon: state.pokemon
})


export default connect(mapDispatchToProps, { getAllPokemon })(Home)




