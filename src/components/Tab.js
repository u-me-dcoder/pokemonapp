import React, { Fragment,useState } from 'react'
import {NavLink,TabContent,TabPane} from 'reactstrap'
import PokemonStats from './PokemonStats'
export default function Tab(props) {
    let {stats,typing}=props
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
      if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Fragment>
             <ul className="nav list overview-tab" tabs="true">
          <li>
            <NavLink
             className={activeTab==='1' ? `active bg-${typing.name}`:""}
             
              onClick={() => {
                toggle("1");
              }}
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeTab==='2' ? `active bg-${typing.name}`:""}
              onClick={() => {
                toggle("2");
              }}
            >
              Moves
            </NavLink>
          </li>
          <li>
            <NavLink
               className={activeTab==='3' ? `active bg-${typing.name}` :""}
              onClick={() => {
                toggle("3");
              }}
            >
              evolution
            </NavLink>
          </li>
        </ul>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <PokemonStats data={stats} type={typing} />
          </TabPane>
          <TabPane tabId="2">moves</TabPane>
          <TabPane tabId="3">evolution</TabPane>
        </TabContent>
        </Fragment>
    )
}
