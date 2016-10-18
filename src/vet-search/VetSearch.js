import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../map/place/Place'
// import Place from './place/Place';
import styles from './vet-search-style.css'

import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from 'react-bootstrap';
import Data from '../data/offices'


export default class VetSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            officesData: [],
            currentCoordinates: []
        }

        this._onClick = this._onClick.bind(this);
    }

    componentWillMount() {
        this.setState = {
            officesData: Data,
            currentCoordinates: {}
        }
    }

    _onClick = (markerPosition, mousePosition, markerProps) => {
        console.log('mouse',mousePosition,'marker', markerPosition);
        const x = markerPosition.x;
        const y = markerPosition.y;
        const distanceKoef = markerProps.text !== 'A' ? 1.5 : 1;
        return distanceKoef * Math.sqrt((x - mousePosition.x) * (x - mousePosition.x) + (y - mousePosition.y) * (y - mousePosition.y));

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
                            <Place></Place>
                        </GoogleMap>
                    </div>
                </Row>
            </Grid>
        )
    }
}
