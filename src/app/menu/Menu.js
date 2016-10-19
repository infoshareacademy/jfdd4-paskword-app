import React from 'react'
import './Menu.css'
import Item from './item/Item'

export default (props) =>
    <ul className="App-Menu">
        <Item path={`/`} activeWhenMatchingExactly={true} customClasses="">Futrzak</Item>
        <Item path={`/vets`}>Nasi weterynarze</Item>
        <Item path={`/offices`}>Gabinety</Item>
        <Item path={`/vetSearch`}>Wyszukaj najbliższego gabinetu</Item>
        <Item path={`/calendar`}>Kalendarz</Item>
    </ul>
