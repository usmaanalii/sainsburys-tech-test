import React from 'react';
import { ButtonView } from './view';

export const ButtonController = props => {
    const checkedOutText = 'Remove from basket';
    const notCheckedOutText = 'Add to basket';

    const viewProps = {
        ...props,
        text: props.checkedOut ? checkedOutText : notCheckedOutText
    }

    return <ButtonView { ...viewProps } />;
}
