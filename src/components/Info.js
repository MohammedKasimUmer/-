import React from "react";
import { FaEnvelope,FaLinkedin } from 'react-icons/fa';
export default function Info () {
    return (
        <div className="main--info">
            
            <img src="./images/a.png" className="my--img" alt="me"/>
             
             <div className= "infos">
                 <h3 className="name">Mohammed Kasim</h3>
                 <h4 className="field">Front-end Developer</h4>
                 <h5 className="type">personal buisness card</h5>
             </div>
             <nav className="buttons">
                <button className="email--button"><FaEnvelope size={15} style={{ color: 'black', marginRight: '10px' }} />Email</button>
                <button className="linkedin--button"><FaLinkedin size={15} style={{ color: 'rgb(31, 95, 214)',marginBottom: '0px', marginRight: '10px' }} />Linkedin</button>
             </nav>
        </div>
    )
}