import React from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

export const Home = ({ numberOfItemsInBasket, updateCheckoutBasketItems }) => (
    <>
        <Link to="/checkout">Checkout ({ numberOfItemsInBasket })</Link>

        <Product updateCheckoutBasketItems={ updateCheckoutBasketItems } />

        <Product updateCheckoutBasketItems={ updateCheckoutBasketItems } />

        <Product updateCheckoutBasketItems={ updateCheckoutBasketItems } />

        <Product updateCheckoutBasketItems={ updateCheckoutBasketItems } />
    </>
);
