import React from 'react'

export default (props) => (
    <button onClick={props.handleClick}
            className={props.activeFilter === props.myFilter ? 'active' : ''}>
        {props.children}
    </button>
)