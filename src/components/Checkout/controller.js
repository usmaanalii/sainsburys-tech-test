import React, { useContext } from 'react';

import { ProductsContext } from '../../context';

import { CheckoutView } from './view';

const PAGE_TITLE = 'Shopping cart page';

export const CheckoutController = () => {
    document.title = PAGE_TITLE;

    const { products, updateCheckedOutProducts } = useContext(ProductsContext);
    const checkedOutProducts = products.filter(({ checkedOut }) => checkedOut);
    const totalPrice = checkedOutProducts.reduce((totalPrice, { price }) => totalPrice + price, 0);

    const viewProps = {
        products: checkedOutProducts,
        totalPrice,
        updateCheckedOutProducts
    };

    return <CheckoutView { ...viewProps } />;
};
