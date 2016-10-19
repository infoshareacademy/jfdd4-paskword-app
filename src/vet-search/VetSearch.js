import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import styles from './vet-search-style.css';
import startMark from '../place/start.png';
import finishMark from '../place/finish.png'
import placeStyles from '../place/place-styles.css';
import {Link} from 'react-router';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import Data from '../data/offices'
import vetsData from '../data/vets.js';
import $ from 'jquery';


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
        console.log('1X', this.state.xPoint)
    }

    _onClick(mapClick) {
        this.setState({
            officesData: Data,
            xPoint: mapClick.lat,
            yPoint: mapClick.lng,
            idOfNearestOffice: (function () {
                var result = [];
                Data.forEach(function (office) {
                    result.push(Math
                        .sqrt(
                            Math.pow((office.coordinates.latitude - mapClick.lat), 2)
                            + Math.pow((office.coordinates.longitude - mapClick.lng), 2)
                        ));
                });
                console.log('click', mapClick);
                console.log('lattitude', mapClick.lat);
                console.log('longtitude', mapClick.lng);

                return result.indexOf(Math.min(...result)) + 1;
            })()

        });
        console.log('2X', this.state.xPoint)
    }

    render() {
        var x = this.state.xPoint;
        var y = this.state.yPoint;
        var nearestOffice = this.state.idOfNearestOffice;
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
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
                                    className="img-responsive"
                                    lat={x}
                                    lng={y}
                                    text={
                                <img src={startMark} alt="Start Mark" />}
                                />

                                {this.state.officesData.filter(function (office) {
                                    return office.id === nearestOffice
                                })
                                    .map(function (officeId) {
                                        return (
                                            <Place key={officeId.id}
                                                   className="img-responsive"
                                                   lat={officeId.coordinates.latitude}
                                                   lng={officeId.coordinates.longitude}
                                                   text={<img src={finishMark} alt="Finish Mark" />}
                                            />
                                        )
                                    })
                                }
                            </GoogleMap>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={startMark} alt="Start Mark"/>
                        <span>Twoja lokalizacja</span>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={finishMark} alt="Finish Mark"/>
                        <span>Najbliższy gabinet</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        {this.state.officesData.filter(function (office) {
                            return office.id === nearestOffice
                        })
                            .map(function (officeId) {
                                return (
                                    <Link to={`/offices/${officeId.id}`} key={officeId.id}>
                                        <Row xs={12} md={5}>
                                            <Col xs={12} md={2}>
                                                <img src={officeId.logo}/>
                                            </Col>
                                            <Col>
                                                <p>{officeId.officeName}</p>
                                                <p>{officeId.officeAddress}</p>
                                            </Col>
                                        </Row>
                                    </Link>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}