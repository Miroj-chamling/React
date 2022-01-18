import { useEffect, useState } from "react";
import React from 'react';

export default function Btn()
{
    const [resourceType, setResourceType] = useState('users');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return(
        <>
        <div>
            <button onClick = {() => setResourceType('posts')}>Post</button>
            <button onClick = {() => setResourceType('Users')}>User</button>
            <button onClick = {()=> setResourceType('Comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {return <h5>{JSON.stringify(item)}</h5>})}
        </>
    )
}
