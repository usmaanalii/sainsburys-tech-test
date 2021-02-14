import React from 'react';

import { Button } from './Button';

import styles from './styles.module.css';

export const ProductView = ({
    productId,
    title,
    sku,
    price,
    image,
    checkedOut,
    updateCheckedOutProducts
}) => (
    <section className={ styles.container }>
        <img alt={ title } src={ image } />

        <h1>{ title }, { sku }</h1>

        <h2>{ price }</h2>

        <Button
            checkedOut={ checkedOut }
            onClickHandler={ () => updateCheckedOutProducts(productId) }
        />
    </section>
);
