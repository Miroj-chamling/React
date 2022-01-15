import React from 'react';

function Item(props)
{
    const {name, price} = props;
    return(
        <div>
            <h1>{`name : ${name} Price : ${price}`}</h1>
        </div>
    )
}

export default Item;