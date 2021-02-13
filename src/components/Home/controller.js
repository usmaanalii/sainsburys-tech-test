import React from 'react';

import { HomeView } from './view';

export const HomeController = props => {
    const numberOfCheckedOutProducts = props.products.filter(({ checkedOut }) => checkedOut).length;

    const viewProps = {
        ...props,
        numberOfCheckedOutProducts
    };

    return <HomeView { ...viewProps } />;
};
