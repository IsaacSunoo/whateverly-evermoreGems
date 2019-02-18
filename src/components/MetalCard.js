import React from 'react';
import './scss/MetalCardStyle.scss';

function MetalCard(props) {

  return (
    <div className='metal-card'>
        <h5 className='metal-name'>
            {props.metalName}
        </h5>
        <h6>
            Metal Composition
            {props.metalMakeup.map(metal => {
                return (
                    <div>{metal}</div>
                )
            })}
        </h6>
        <button onClick={() => props.selectMetal(props.metalId)}>select</button>
    </div>
  )
}
export default MetalCard;