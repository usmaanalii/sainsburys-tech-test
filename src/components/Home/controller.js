import React, { useContext } from 'react';

import { ProductsContext } from '../../context';

import { HomeView } from './view';

export const HomeController = () => {
    const { products, updateCheckedOutProducts } = useContext(ProductsContext);

    const numberOfCheckedOutProducts = products.filter(({ checkedOut }) => checkedOut).length;

    const viewProps = {
        products,
        numberOfCheckedOutProducts,
        updateCheckedOutProducts
    };

    return <HomeView { ...viewProps } />;
};
