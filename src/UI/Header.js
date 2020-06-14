import React from "react";
import Logo from '../assets/pokemon.svg'
import {BsSearch} from 'react-icons/bs'
import {GiFemale,} from 'react-icons/gi'
import {connect} from 'react-redux'
import {setText} from '../store/actions/filter'
 function Header({filters,setText,reference}) {

   
   
  return (
    <header>
    <h3 className="heading">What pokemon are you looking for ?</h3>

      <div className="form-group">
        <div className="form-group-icon left">
            <BsSearch className="text-normal"/>
          <input type="text" className="form-control" value={filters.text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter Pokemon Name"/>
        </div>
      </div>

    
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <button className="btn filter-card bg-grass">
              <h6>Habitat</h6>
              <img src={Logo} alt="Logo background"/>
            </button>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <button className="btn filter-card bg-fire">
              <h6>Region</h6>
              <img src={Logo} alt="Logo background"/>
            </button>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <button className="btn filter-card bg-poison" onClick={()=>alert('helo')}>
              <h6>Types</h6>
              <img src={Logo} alt="Logo background"/>
            </button>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <button className="btn filter-card bg-water">
              <h6>Gender</h6>
              <GiFemale className="icon"/>
              <img src={Logo} alt="Logo background"/>
            </button>
          </div>
        </div>
  
    </header>
  );
}


const mapDispatchToProps = state =>({
  filters:state.filters
})

export default connect(mapDispatchToProps,{setText})(Header)
