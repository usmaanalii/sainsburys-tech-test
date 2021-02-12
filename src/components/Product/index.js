import React from 'react';

export const Product = ({ id = "id", name = "name", sku = "sku", price = "price", image = "image", updateCheckoutBasketItems }) => (
    <>
        <div>Image</div>

        <div>{ name }, { sku }</div>

        <div>{ price }</div>

        <button onClick={ () => updateCheckoutBasketItems(items => [...items, id]) }>Add to Basket</button>
    </>
);
