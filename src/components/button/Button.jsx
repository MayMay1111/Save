import React from "react";
import './button.scss'

const Button = ({props}) => {
    return (
        <button class={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
}

const OutlineButton = ({props}) => {
    return (
        <button class={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    onCLick: PropTypes.func,
}

export default {Button, OutlineButton}