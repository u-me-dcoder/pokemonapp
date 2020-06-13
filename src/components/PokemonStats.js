import React from 'react'

export default function PokemonStats(props) {

    let {data,type} = props
    let statList = data.map((data) => {
        let { stat, base_stat } = data;
        
        return (
          <div className="stat-item" key={stat.name}>
            <h6 className={`text-${type.name}`}>{stat.name}</h6> 
    
     
    
            <div className="progress">
              <div
                className={`progress-bar bg-${type.name}`}
                role="progressbar"
                aria-valuenow={base_stat}
                style={{width:`${base_stat}%`}}
                aria-valuemin={0}
                aria-valuemax={140}
              />
            </div>
            {base_stat>100 ? <span className="text-primary">{base_stat}</span>:<span>{base_stat}</span>}
          </div>
        );
      });
    return (
        <div>
            {statList}
        </div>
    )
}
