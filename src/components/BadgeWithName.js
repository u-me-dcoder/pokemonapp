import React from 'react'
import {images} from '../utils/type'
import capitalize from '../helpers/capitalize'
export default function BadgeWithName({name}) {
    return (
       
            <div className={`badge-name bg-${name}`}>
              <img src={images[name]} alt={name} />
              <span>{capitalize(name)}</span>
            </div>
         
    )
}
