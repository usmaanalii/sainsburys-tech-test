import React, { useContext } from 'react';

import { ProductsContext } from '../../context';

import { CheckoutView } from './view';

export const CheckoutController = () => {
    const { products, updatecheckedOutProducts } = useContext(ProductsContext);
    const checkedOutProducts = products.filter(({ checkedOut }) => checkedOut);
    const totalPrice = checkedOutProducts.reduce((totalPrice, { price }) => totalPrice + price, 0);

    const viewProps = {
        products: checkedOutProducts,
        totalPrice,
        updatecheckedOutProducts
    };

    return <CheckoutView { ...viewProps } />;
};
