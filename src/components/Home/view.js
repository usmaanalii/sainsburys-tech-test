import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

export const HomeView = ({ products, numberOfCheckedOutProducts, updateCheckedOutProducts }) => (
    <Fragment>
        <header>
            <Link to="/checkout">Checkout ({ numberOfCheckedOutProducts })</Link>
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
    </Fragment>
);
