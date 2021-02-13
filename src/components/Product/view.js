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
    <div className={ styles.container }>
        <img alt="product" src={ image } />

        <div>{ title }, { sku }</div>

        <div>{ price }</div>

        <Button
            checkedOut={ checkedOut }
            onClickHandler={ () => updateCheckedOutProducts(productId) }
        />
    </div>
);
