import React from 'react'

export default function Entry(props){
    return  (
<div>
    <dl className="dictionary">
    <div className='term'>
      <dt>
        <span className='emoji' role='img' aria-label='Love'>
           {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.expression}
      </dd>
    </div>
  </dl>
  </div>
 )
}