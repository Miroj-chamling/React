import React from 'react';
import Item from './item';
function Product()
{
    const items = [
        {
            name : "Mac book",
            price : "1000",
        },
        {
            name : "Lenovo legion-5",
            price : "800",
        }

    ]
    return(
       <div className = "items">
           {
               items.map((item) => ( <Item name = {item.name} price = {item.price}/>))
           }
       </div>
    );
}

export default Product;