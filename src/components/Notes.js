import React from 'react'
import Content from './content'

export default function Notes(props){
    return(
        <div className='note--frame' >
            <h3 className='note--title'>{props.title}</h3>
            <Content content= {props.content}/>
        </div>
    )
}