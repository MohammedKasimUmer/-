import React from "react";
import {FaEnvelope} from 'react-icons/fa'


export default function Contact( props){

    return(
    
        <div className="contacts">
            
            <div className="contacts--card">
                <img className="contact--img"src={props.img} alt=""/>
                <h1> { props.name}</h1>
            </div>
         <div className="infos--group">
         <FaEnvelope size={15} style={{ color: 'black', marginRight: '10px' }} />
           <p>{ props.phone}</p>  
         </div>   
        </div>
        
    )
}