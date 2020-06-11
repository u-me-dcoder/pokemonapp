import React from 'react';
import {types} from '../utils/type'
import {Link} from 'react-router-dom'



export default function Sidebar() {




  let list = types.map((item)=>{

    return(
      <li key={item.name}  >
        <Link to="/" className={`bg-${item.name}`}>{item.name}</Link>
      </li>
    )
  })
  return (
    <aside>
    <div className="logo"></div>

    <ul className="list list-type mt-3">
     {list}
    </ul>

  </aside>
  );
}
