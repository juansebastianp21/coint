import React from 'react';
import './button.scss';

const STYLES = [
    'btn--primary--solid',
    'btn--warning--solid',
    'btn--danger--solid',
    'btn--success--solid',
    'btn--primary--outline',
    'btn--warning--outline',
    'btn--danger--outline',
    'btn--success--outline',
];

const SIZES = ['btn--small', 'btn--medium'];

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    onMouseEnter,
    onMouseLeave,
}) {
    const checkButtonStyles = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button
            className={`btn ${checkButtonStyles} ${checkButtonSize}`}
            {...{onClick, type, onMouseEnter, onMouseLeave}}>
            {children}
        </button>
    );
}

export default Button;
