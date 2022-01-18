import React from 'react';
import { useState } from 'react';


export default function Click()
{
    const [event, setEvent] = useState('clik');

    function Clicked(){
        setEvent ('You clicked me')
    }

    function unClicked(){
        setEvent (' ')
    }
    
    return(
        <>
            <div>
            <button onClick = {Clicked}>Click Me</button>
            <button onClick = {unClicked}>Unclick Me</button>
            </div>
            <h1>{event}</h1>
        </>
    )
}