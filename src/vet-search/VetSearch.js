import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'
// import Place from './place/Place';
import styles from './vet-search-style.css'

import {
    Grid,
    Row
} from 'react-bootstrap';
import Data from '../data/offices'


export default class VetSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            officesData: []
        }

        this._onClick = this._onClick.bind(this);
    }

    componentWillMount() {
        this.setState = {
            officesData: Data,
            xPoint: 0
        }
    }

    _onClick(mapClick) {
        var xPoint = mapClick.lat;
        var yPoint = mapClick.lng;
        var result = [];
        var idOfNearesOffice;
        Data.forEach(function (office) {
            result.push(Math
                .sqrt(
                    Math.pow((office.coordinates.latitude - xPoint), 2) +
                    Math.pow((office.coordinates.longitude - yPoint), 2)
                ));
        });
        idOfNearesOffice = result.indexOf(Math.min(...result)) + 1;
    }

    render() {
        return (
            <Grid>
                <Row>
                    <div className="map">
                        <GoogleMap
                            bootstrapURLKeys={{
                                key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                language: 'pl'
                            }}
                            onClick={this._onClick}
                            center={[54.35118909616142, 18.644957542419434]}
                            zoom={9}>

                            <Place
                                lat={54.35118909616142} lng={18.644957542419434} text={'A'} zIndex={2}
                            >
                            </Place>
                        </GoogleMap>
                    </div>
                </Row>
            </Grid>
        )
    }
}