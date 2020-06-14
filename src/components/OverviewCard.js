import React from "react";

import capitalize from "../helpers/capitalize";
import Types from "./Types";
import Tab from "./Tab";
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import DefaultImage from '../assets/pokemon.svg'

export default function OverviewCard(props) {
  let { sprites, name, types, stats, typing,moves ,abilities} = props;

  let primaryType = types[0].type

  return (
    <div className="overview-card">
      <Link to="/" className={`overview-return bg-${primaryType.name} d-sm-none text-${primaryType.name}`}> <BsArrowLeft/></Link>
      {sprites.front_default != null ? (
        <img src={sprites.front_default} className="sprite" alt={name} />
      ):(<div className={`defaultImg bg-${primaryType.name}`}><img src={DefaultImage} alt={name}/></div>)}

      <h6 className="title">{capitalize(name)}</h6>
      <Types types={types} />
      <Tab stats={stats} typing={typing} moves={moves}  abilities={abilities}/>
    </div>
  );
}
