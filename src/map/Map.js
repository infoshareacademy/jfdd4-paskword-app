import React from 'react';
import GoogleMap from 'google-map-react';
import Place from './place/Place';
import styles from './map-style.css';
import vetsData from '../data/vets.js';


export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            vetsData: []
        }
    }

    componentWillMount() {
        this.setState({
            vetsPoint: vetsData
        })
    }

    render() {
        var vetsP = this.state.vetsPoint;
        return (
            <div className="map">
                <GoogleMap
                    center={[54.35118909616142, 18.644957542419434]}
                    zoom={9}>
                    {vetsP.map(function (vetGPSPoint) {
                        console.log(vetGPSPoint);
                        return (
                            <Place key={vetGPSPoint.phone}
                                   lat={vetGPSPoint.coordinates[0].latitude} lng={vetGPSPoint.coordinates[0].longitude}
                                   text={'A'}/>
                        )
                    })}
                </GoogleMap>
            </div>
        )
    }

}