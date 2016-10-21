import React from 'react'
import './Menu.css'
import Item from './item/Item'
import Logo from './logo.png'

export default (props) =>
    <ul className="App-Menu">
        <Item path={`/`} ><img src={Logo} alt="Logo"   className="img-responsive"/></Item>
        <Item path={`/`} activeWhenMatchingExactly={true} customClasses="">Futrzak</Item>
        <Item path={`/vets`}>Nasi weterynarze</Item>
        <Item path={`/offices`}>Gabinety</Item>
        <Item path={`/vetSearch`}>Wyszukaj najbliższy gabinet</Item>
        <Item path={`/calendar`}>Kalendarz</Item>
    </ul>
