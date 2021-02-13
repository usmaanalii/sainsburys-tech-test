import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from '../Home';
import { Checkout } from '../Checkout';

export const App = () => {
    const [products, updateProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsainsburyplc.github.io/front-end-test/products.json')
            .then(response => response.json())
            .then(products => updateProducts(products.map(productData => ({...productData, checkedOut: false}))));
    }, []);

    const checkedOutProducts = products.filter(({ checkedOut }) => checkedOut);

    const handleUpdateCheckedOutProducts = id => {
        const updatedProducts = products.map(product => (
            product.productId === id ? { ...product, checkedOut: !product.checkedOut } : product
        ));
        
        return updateProducts(updatedProducts);
    };
    
    return (
        <Router>
            <Switch>
            <Route path="/checkout">
                <Checkout
                    products={ checkedOutProducts }
                    updatecheckedOutProducts={ handleUpdateCheckedOutProducts }
                />
            </Route>

            <Route path="/">
                <Home
                    products={ products }
                    updatecheckedOutProducts={ handleUpdateCheckedOutProducts }
                />
            </Route>
            </Switch>
        </Router>
    )
}
