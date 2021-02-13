import React from 'react';
import { shallow } from "enzyme";

const mockedFirstProduct = {
    checkedOut: true
};

const mockedSecondProduct = {
    checkedOut: false
};

const actualNumberOfCheckedOutProduct = 1;

const mockedProducts = [mockedFirstProduct, mockedSecondProduct];

const MockedHomeView = () => 'some mocked home view';
const MockedProductsContext = {
    products: [mockedFirstProduct, mockedSecondProduct],
    updateCheckedOutProducts: 'some mocked update checked out products'
};

describe('Given the home controller component', () => {
    let HomeController;

    beforeEach(() => {
        jest.doMock('react', () => ({
            ...React,
            useContext: () => MockedProductsContext
        }));

        jest.doMock('../../context', () => ({ ProductsContext: MockedProductsContext }));

        jest.doMock('./view', () => ({
            HomeView: MockedHomeView
        }))
    });

    describe('When imported as a Node module', () => {
        beforeEach(() => {
            ({ HomeController } = require('./controller'));
        });

        it('Then should be a function', () => {
            expect(HomeController).toBeInstanceOf(Function);
        });

        describe('And when rendered as a React component', () => {
            let actualComponent;

            beforeEach(() => {
                actualComponent = shallow(<HomeController />);
            });

            it('Then should be a HomeView', () => {
                expect(actualComponent.type()).toBe(MockedHomeView);
            });

            it('Then should contain the expected products', () => {
                expect(actualComponent.prop('products')).toEqual(mockedProducts);
            });

            it('Then should contain the actual number of checked out products', () => {
                expect(actualComponent.prop('numberOfCheckedOutProducts')).toEqual(actualNumberOfCheckedOutProduct);
            });
        });
    });

    afterEach(() => {
        jest.resetModules();
    });
});
