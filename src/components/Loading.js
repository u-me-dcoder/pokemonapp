import React from 'react';

import Gif2 from '../assets/gif/tenor1.gif';
import Gif3 from '../assets/gif/tenor2.gif'
import '../assets/scss/components/loading.scss'
export default function Loading() {

  let imgSrc = [Gif2,Gif3]


  let randomImg = Math.floor(Math.random(0,imgSrc.length)* imgSrc.length)
 
  return (
    <div className="loading">
      <img src={imgSrc[randomImg]} alt="Loading the data please wait"/>

      <h1>Loading</h1>
    </div>
  );
}
