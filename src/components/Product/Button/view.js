import React from 'react';

import styles from './styles.module.css';

export const ButtonView = ({ checkedOut, text, onClickHandler }) => (
    <button
        className={ ` ${ styles.button } ${ checkedOut ? styles.red : styles.green }` }
        aria-label={ text }
        onClick={ onClickHandler }
    >
        { text }
    </button>
);
