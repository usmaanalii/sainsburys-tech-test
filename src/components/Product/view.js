import React from 'react';

import { Button } from './Button';

import styles from './styles.module.css';

export const ProductView = ({
    productId,
    title,
    price,
    image,
    checkedOut,
    updateCheckedOutProducts
}) => (
    <section className={ styles.container }>
        <img className={ styles.image } alt={ title } src={ image } />

        <h1 className={ styles.title }>{ title }</h1>

        <h2 className={ styles.price }>£{ price }</h2>

        <Button
            checkedOut={ checkedOut }
            onClickHandler={ () => updateCheckedOutProducts(productId) }
        />
    </section>
);
