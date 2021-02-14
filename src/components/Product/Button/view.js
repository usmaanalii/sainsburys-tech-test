import React from 'react';

export const ButtonView = ({ text, onClickHandler }) => <button aria-label={ text } onClick={ onClickHandler }>{ text }</button>;
