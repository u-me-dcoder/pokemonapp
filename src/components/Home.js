import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux'
import { getAllPokemon } from '../store/actions/pokemon'
import { Link } from 'react-router-dom'
import Sidebar from '../UI/Sidebar'
import Favorite from '../UI/Favorite'
import {types,colors} from '../utils/type'
function Home({ getAllPokemon }) {


  // useEffect(() => {
  //   getAllPokemon()
  // }, [getAllPokemon])

  return (
    <div className="home">
      <Sidebar/>

      <section>
        <Favorite/>
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
              <div className="col-lg-2">
                <div className="card">
                    <i className="favorite"></i>  
                    <h6>Bulbasaur</h6>
                    <div className="types">
                    <div className="badge" style={{background:colors.dragon}}>23</div>
                    <div className="badge" style={{backgroundColor:colors.ground}}>23</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>

  );
}



const mapDispatchToProps = state => ({
  pokemon: state.pokemon
})


export default connect(mapDispatchToProps, { getAllPokemon })(Home)




