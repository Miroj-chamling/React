//usestate() hooks

import React from 'react';
import { useState } from 'react';

function Hooks()
{
    //this is how it is done in the class based components.
    // const [state,setState] = useState({count : 4, theme : 'green'});
    // const count = state.count  //this way we can use the function parameter to the program.
    // const theme = state.theme
    // function incrementState()
    // {
    //     setState(prevState => {
    //         return{...prevState ,count : prevState.count +1}
    //     })
    // }

    // function decrementState()
    // {
    //     setState(prevState => {
    //         return{
    //                ...prevState, count : prevState.count -1
    //             }
    //     })
    // }

    //use state hooks
    //this is much easier way to manage state and hooks using
    //use state hooks.
    const [state ,setstate] = useState(4);
    const [theme,setTheme] = useState('green');

    function decrementState()
    {
        setstate(prevState => prevState -1)
            setTheme('red')
        
    }

    function incrementState()
    {
        setstate(prevState => prevState+1)
            setTheme('blue');
    }


    return(
        <div>
        <button onClick = {decrementState}>-</button>
        <span>{state}</span>
        <span>{theme}</span>
        <button onClick = {incrementState}>+</button>
        </div>
    )
}

export default Hooks;