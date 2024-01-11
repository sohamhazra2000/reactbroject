import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


export default function Showshared({children}) {
    const location=useLocation()
    const[show,setShow]=useState(false)
    useEffect(() => {
        if(location.pathname==='/Log'||location.pathname==='/Reg')
        {
            setShow(false)
        }
        else{
            setShow(true)
        }
       }, [location]);
    
  return (
    <div>
      {show && children}
    </div>
  )
}
