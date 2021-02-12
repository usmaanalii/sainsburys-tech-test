import React from 'react';

import { Product } from '../Product';

export const Checkout = ({ items = [] }) => (
    <div>
        You have { items.length } in your basket
        { items.map(() => <Product />) }
    </div>
);
