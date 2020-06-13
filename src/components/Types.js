import React from 'react'
import { v4 as uuidv4 } from "uuid";
import BadgeWithName from './BadgeWithName'
export default function Types({types}) {
    return (
        <div className="d-flex list-inline justify-content-center">
        {types.map((types) => {
          return <BadgeWithName key={uuidv4()} name={types.type.name} />;
        })}
      </div>
    )
}
