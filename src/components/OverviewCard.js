import React from "react";

import capitalize from "../helpers/capitalize";
import Types from "./Types";
import Tab from "./Tab";
export default function OverviewCard(props) {
  let { sprites, name, types, stats, typing,moves } = props;
  return (
    <div className="overview-card">
      {sprites.front_default != null && (
        <img src={sprites.front_default} className="sprite" alt={name} />
      )}

      <h6 className="title">{capitalize(name)}</h6>
      <Types types={types} />
      <Tab stats={stats} typing={typing} moves={moves} />
    </div>
  );
}
