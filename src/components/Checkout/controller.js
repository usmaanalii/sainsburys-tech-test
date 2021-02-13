import React from 'react';

import { CheckoutView } from './view';

export const CheckoutController = props => {
    const totalPrice = props.products.reduce((totalPrice, { price }) => totalPrice + price, 0);

    const viewProps = {
        ...props,
        totalPrice
    };

    return <CheckoutView { ...viewProps } />;
};
