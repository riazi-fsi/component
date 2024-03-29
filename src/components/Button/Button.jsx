import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button(props) {

    const renderContent = React.useCallback(() => {
        switch (props.type) {
            case 'warning':
                return '  bg-yellow-500  hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 active:bg-yellow-800 '

            case 'danger':
                return ' bg-red-600  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 active:bg-red-800  '

            default:
                return '  bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 active:bg-blue-800  '
                break;
        }
    }, [props.type]);
    return (
        <button
            className={props.disabled ? 'inline-block px-6 py-2.5 m-2 font-medium text-sm text-white w-36  leading-tight bg-gray-300 rounded focus:outline-none' :
                'inline-block px-6 py-2.5 m-2 w-36 text-white font-medium text-sm leading-tight  focus:shadow-lg focus:outline-none rounded focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  shadow-md' +
                renderContent() + [props.className].join('')}
            onKeyPress={props.onKeyPress}
            id={props.id}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick:PropTypes.func,
    onKeyPress:PropTypes.func

}

export default Button
