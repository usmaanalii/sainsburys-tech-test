import React from 'react';
import { ButtonView } from './view';

export const ButtonController = props => {
    const viewProps = {
        ...props,
        text: props.checkedOut ? 'Remove' : 'Add'
    }

    return <ButtonView { ...viewProps } />;
}
