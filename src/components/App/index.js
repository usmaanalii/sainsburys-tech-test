import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductsContext } from '../../context';

import { Home } from '../Home';
import { Checkout } from '../Checkout';

/**
 * TODO:
 * 1. Transform the price to add .00 if the price is returned without pences
 * 2. Ensure the product components elements align (e.g the image, text and button are all at the same height)
 * 3. Add an "empty shopping cart" view
 * 4. Refactor the products container into it's own component
 */


export const App = () => {
    const [products, updateProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsainsburyplc.github.io/front-end-test/products.json')
            .then(response => response.json())
            .then(products => updateProducts(products.map(productData => ({...productData, checkedOut: false}))));
    }, []);

    const updateCheckedOutProducts = id => {
        const updatedProducts = products.map(product => (
            product.productId === id ? { ...product, checkedOut: !product.checkedOut } : product
        ));

        return updateProducts(updatedProducts);
    };
    
    return (
        <ProductsContext.Provider value={{ products, updateCheckedOutProducts }}>
            <Router>
                <Switch>
                    <Route path="/checkout" component={ Checkout } />

                    <Route path="/" component={ Home } />
                </Switch>
            </Router>
        </ProductsContext.Provider>
    )
}
