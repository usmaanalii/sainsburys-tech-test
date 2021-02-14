import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { Product } from '../Product';

import styles from './styles.module.css';

export const CheckoutView = ({ products, totalPrice, updateCheckedOutProducts }) => (
    <Fragment>
        <header className={ styles.returnLinkContainer }>
            <Link to="/">Return to shopping</Link>
        </header>

        {
            products.length ? (
                <Fragment>
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

                    <footer className={ styles.total }>
                        Your total is £{ totalPrice }
                    </footer>
                </Fragment>
            ) : (
                <main>
                    <h1>Your basket is empty</h1>
                </main>
            )

        }
    </Fragment>
);
