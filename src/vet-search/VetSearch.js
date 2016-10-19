import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'
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
            officesData: [],
            xPoint: 0,
            yPoint: 0,
            idOfNearestOffice: null
        };

        this._onClick = this._onClick.bind(this);
    }

    _onClick(mapClick) {
        this.setState = {
            officesData: Data,
            xPoint: mapClick.lat,
            yPoint: mapClick.lng,
            idOfNearestOffice: (function () {
                var result = [];
                Data.forEach(function (office) {
                    result.push(Math
                        .sqrt(
                            Math.pow((office.coordinates.latitude - mapClick.lat), 2) +
                            Math.pow((office.coordinates.longitude - mapClick.lng), 2)
                        ));
                });
                console.log('click',mapClick)
                console.log('lattitude',mapClick.lat)
                console.log('longtitude',mapClick.lng)
                return result.indexOf(Math.min(...result)) + 1;
            })()
        };
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
                                lat={54.35118909616142} lng={18.644957542419434} text={'A'}
                            >
                            </Place>
                        </GoogleMap>
                    </div>
                </Row>
            </Grid>
        )
    }
}