import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductsContext } from '../../context';

import { Home } from '../Home';
import { Checkout } from '../Checkout';


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
