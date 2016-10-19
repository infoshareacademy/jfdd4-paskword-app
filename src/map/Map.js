import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import styles from './map-style.css';
import vetsData from '../data/vets.js';
import officesData from '../data/offices.js'
import officehMark from '../place/finish.png'


export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            officesData: []
        }
    }

    componentWillMount() {
        this.setState({
            officesPoint: officesData
        })
    }

    render() {
        var officeP = this.state.officesPoint;
        return (
            <div className="map">
                <GoogleMap
                    center={[54.35118909616142, 18.644957542419434]}
                    zoom={9}>
                    {officeP.map(function (officeGPSPoint) {
                        return (
                            <Place key={officeGPSPoint.id}
                                   lat={officeGPSPoint.coordinates.latitude} lng={officeGPSPoint.coordinates.longitude}
                                   text={<img src={officehMark} alt="Gabinet Weterynaryjny"/>}/>
                        )
                    })}
                </GoogleMap>
            </div>
        )
    }
}