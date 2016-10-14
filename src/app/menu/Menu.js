import React from 'react'
import './Menu.css'
import Item from './item/Item'

export default (props) =>
    <ul className="App-Menu">
        <Item path={`/`} activeWhenMatchingExactly={true}>Futrzak</Item>
        <Item path={`/vets`}>Nasi weterynarze</Item>
        <Item path={`/offices`}>Gabinety</Item>

</ul>