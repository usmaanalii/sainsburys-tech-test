import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom'
import { Product } from '../Product';

const mockedNumberOfCheckedOutProducts = 'some mocked number of checked out products';
const mockedLinkText = `Checkout (${ mockedNumberOfCheckedOutProducts })`;
const mockedUpdatedCheckedOutProducts = 'some mocked updated checked out products';

const mockedFirstProduct = {
    productId: 'some mocked first product id',
    foo: 'bar'
};

const mockedSecondProduct = {
    productId: 'some mocked second product id',
    foo: 'bar'
};

const mockedProducts = [mockedFirstProduct, mockedSecondProduct];

const mockedProps = {
    products: mockedProducts,
    numberOfCheckedOutProducts: mockedNumberOfCheckedOutProducts,
    updateCheckedOutProducts: mockedUpdatedCheckedOutProducts
};

const expectedLinkRoute = '/checkout';

describe('Given the Home view component', () => {
    let HomeView;

    describe('When imported as a Node module', () => {
        ({ HomeView } = require('./view'));
    });

    describe('When rendered as a React component', () => {
        let actualComponent;

        beforeEach(() => {
            actualComponent = shallow(<HomeView { ...mockedProps } />);
        });
        
        it('Then should contain a single Link element', () => {
            expect(actualComponent.find(Link)).toHaveLength(1);
        });

        it('Then should contain a single Link element with the expected "to" route', () => {
            expect(actualComponent.find(Link).prop('to')).toBe(expectedLinkRoute);
        });

        it('Then should a single Link with the expected text', () => {
            expect(actualComponent.find(Link).text()).toBe(mockedLinkText);
        });

        it('Then should contain the correct number of Product components', () => {
            expect(actualComponent.find(Product)).toHaveLength(mockedProducts.length);
        });

        mockedProducts.forEach(({ productId }, index) => {
            it(`Then should contain a Product at index ${ index } with the correct key`, () => {
                expect(actualComponent.find(Product).at(index).key()).toBe(productId);
            });
    
            it(`Then should contain a Product at index ${ index } with the correct spreaded prop`, () => {
                expect(actualComponent.find(Product).at(index).prop('foo')).toBe('bar');
            });
    
            it(`Then should contain a a Product at index ${ index } with the updated checked out products prop`, () => {
                expect(actualComponent.find(Product).at(index).prop('updateCheckedOutProducts')).toBe(mockedUpdatedCheckedOutProducts);
            });
        })
    });
});
