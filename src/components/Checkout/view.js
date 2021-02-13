import React from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

export const CheckoutView = ({ products, totalPrice, updateCheckedOutProducts }) => (
    <div>
        <div>
            <Link to="/">Return to shopping</Link>
        </div>

        <div>
            Your total is { totalPrice }
        </div>

        {
            products.map(productData => (
                <Product
                    key={productData.productId}
                    { ...{...productData, updateCheckedOutProducts} }
                />
            ))
        }
    </div>
);
