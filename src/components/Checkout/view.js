import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

export const CheckoutView = ({ products, totalPrice, updateCheckedOutProducts }) => (
    <Fragment>
        <header>
            <Link to="/">Return to shopping</Link>
        </header>

        <main>
            {
                products.map(productData => (
                    <Product
                        key={productData.productId}
                        { ...{...productData, updateCheckedOutProducts} }
                    />
                ))
            }
        </main>

        <footer>
            Your total is { totalPrice }
        </footer>
    </Fragment>
);
