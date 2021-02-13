import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

export const HomeView = ({ products, numberOfCheckedOutProducts, updateCheckedOutProducts }) => (
    <Fragment>
        <Link to="/checkout">Checkout ({ numberOfCheckedOutProducts })</Link>

        {
            products.map(productData => (
                <Product
                    key={productData.productId}
                    { ...{...productData, updateCheckedOutProducts} }
                />
            ))
        }

    </Fragment>
);
