import React from 'react'
import './Item.css'

import { Link } from 'react-router'

export default (props) =>
    <li className="App-Menu-Item">
        <Link
            to={props.path}
            className={'btn btn-primary'}
            activeClassName="active"
            onlyActiveOnIndex={props.activeWhenMatchingExactly}>
            {props.children}
        </Link>
    </li>