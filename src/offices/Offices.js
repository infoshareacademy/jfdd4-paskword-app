import React from 'react';
// import Map from './map/Map';

export default class Offices extends React.Component {

    
    render(){
        return(
            <div>
                <img src='#' alt="logo">{this.props.children}</img>
                <span>Nazwa gabinetu:</span><span>{this.props.children}</span>
                <span>Adres:</span><span>{this.props.children}</span>
                <span>Liczba lekarzy:</span><span>{this.props.children}</span>
            </div>
        )
    }

}

