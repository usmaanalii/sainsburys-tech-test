import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from '../Home';
import { Checkout } from '../Checkout';

export const App = () => {
    const [checkoutBasketItems, updateCheckoutBasketItems] = useState([]);

    const numberOfItemsInBasket = checkoutBasketItems.length;
    
    return (
        <Router>
            <Switch>
            <Route path="/checkout">
                <Checkout items={ checkoutBasketItems } />
            </Route>

            <Route path="/">
                <Home numberOfItemsInBasket={ numberOfItemsInBasket } updateCheckoutBasketItems={ updateCheckoutBasketItems }  />
            </Route>
            </Switch>
        </Router>
    )
}
