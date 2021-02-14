import React from 'react';
import { shallow } from "enzyme";

const mockedFirstProduct = {
    checkedOut: true
};
const mockedSecondProduct = {
    checkedOut: false
};
const mockedProducts = [mockedFirstProduct, mockedSecondProduct];

const MockedHomeView = () => 'some mocked home view';
const MockedProductsContext = {
    products: [mockedFirstProduct, mockedSecondProduct],
    updateCheckedOutProducts: 'some mocked update checked out products'
};

const expectedNumberOfCheckedOutProduct = 1;
const expectedDocumentTitle = 'Shopping home page';

describe('Given the home controller component', () => {
    let HomeController;

    beforeEach(() => {
        document.title = '';
        
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

            it('Then it should have set the document title to the expected value', () => {
                expect(document.title).toBe(expectedDocumentTitle);
            });

            it('Then should contain the expected products', () => {
                expect(actualComponent.prop('products')).toEqual(mockedProducts);
            });

            it('Then should contain the actual number of checked out products', () => {
                expect(actualComponent.prop('numberOfCheckedOutProducts')).toEqual(expectedNumberOfCheckedOutProduct);
            });
        });
    });

    afterEach(() => {
        jest.resetModules();
    });
});
