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
            markerStart: null,
            idOfNearestOffice: null
        };

        this._onClick = this._onClick.bind(this);
    }

    componentWillMount() {

    }

    _onClick(mapClick) {
        this.setState = {
            officesData: Data,
            xPoint: mapClick.lat,
            yPoint: mapClick.lng,
            markerStart: 'A',
            idOfNearestOffice: function () {
                var result = [];
                Data.forEach(function (office) {
                    result.push(Math
                        .sqrt(
                            Math.pow((office.coordinates.latitude - mapClick.lat), 2) +
                            Math.pow((office.coordinates.longitude - mapClick.lng), 2)
                        ));
                });
                return result.indexOf(Math.min(...result)) + 1;
            }
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
                                lat={this.state.xPoint}
                                lng={this.state.yPoint}
                                text={"A"}
                            >

                            </Place>
                            {this.state.officesData.filter(function (office) {
                                console.log(this.state.idOfNearestOffice)
                                return office.id === this.state.idOfNearestOffice
                            })
                                .map(function (officeId) {
                                    console.log(officeId)
                                    return (
                                        <Place key={officeId.id}
                                               lat={officeId.coordinates.latitude}
                                               lng={officeId.coordinates.longitude}
                                               text={'B'}
                                        >
                                        </Place>
                                    )
                                })
                            }
                        </GoogleMap>
                    </div>
                </Row>
                <Row>
                    <span>Twoja najbliższa przychodnia weterynaryjna to: </span>
                    {this.state.officesData.filter(function (office) {
                        return office.id === this.state.idOfNearestOffice
                    })
                        .map(function (officeId) {
                            return (
                                <p key={officeId.id}>
                                    <span>{officeId.officeName}</span>
                                </p>
                            )
                        })}
                </Row>
            </Grid>
        )
    }
}