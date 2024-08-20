import React from "react"

import { FaCopyright} from 'react-icons/fa';
const date = new Date()



export default function Footer(){
    return(
        <p className="footer">copyright <FaCopyright /> {date.getFullYear()} All rights reserved. </p>
    )
}