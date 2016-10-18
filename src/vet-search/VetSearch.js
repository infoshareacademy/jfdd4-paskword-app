import React from 'react';
import GoogleMap from 'google-map-react';
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


export default class VetSearch extends React.Component {
    constructor() {
        super();
        this.state =  {
            nearestVet: []
        }
        
        this._onClick  = this._onClick.bind(this);
    }

    _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

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

                    </GoogleMap>
                    </div>
                </Row>
            </Grid>
        )
    }
}