import { useEffect, useState } from "react";
import React from 'react';

export default function Windows()
{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);  
        
        return ()=>{
            window.removeEventListener('resize', handleResize); //clean up
        }
    }, [])

    return(
        <>
        <div>
            <h1>{windowWidth}</h1>
        </div>
        </>
    )

}