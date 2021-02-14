import React, { useContext } from 'react';

import { ProductsContext } from '../../context';

import { HomeView } from './view';

const PAGE_TITLE = 'Shopping home page';

export const HomeController = () => {
    document.title = PAGE_TITLE;

    const { products, updateCheckedOutProducts } = useContext(ProductsContext);

    const numberOfCheckedOutProducts = products.filter(({ checkedOut }) => checkedOut).length;

    const viewProps = {
        products,
        numberOfCheckedOutProducts,
        updateCheckedOutProducts
    };

    return <HomeView { ...viewProps } />;
};
