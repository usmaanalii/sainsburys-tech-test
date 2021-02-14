import React from 'react';

import styles from './styles.module.css';

export const ButtonView = ({ text, onClickHandler }) => (
    <button className={ styles.button } aria-label={ text } onClick={ onClickHandler }>
        { text }
    </button>
);
