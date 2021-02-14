import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

import styles from './styles.module.css';

export const HomeView = ({ products, numberOfCheckedOutProducts, updateCheckedOutProducts }) => (
    <Fragment>
        <header className={ styles.checkoutContainer }>
            <Link to="/checkout">Checkout ({ numberOfCheckedOutProducts })</Link>
        </header>
        
        <main className={ styles.productsContainer }>
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
