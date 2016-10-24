import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import './vet-search-style.css';
import startMark from '../place/start.png';
import finishMark from '../place/finish.png'
import {Link} from 'react-router';
import {
    Grid,
    Row,
    Col,
    Panel
} from 'react-bootstrap';
import Data from '../data/offices'
import '../data/vets.js';


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
                    <Col xs={12} md={10}>
                        <div className="vet-search-map">
                            <GoogleMap
                                bootstrapURLKeys={{
                                    key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                    language: 'pl'
                                }}
                                onClick={this._onClick}
                                center={[54.3434247232928, 18.52667212486267]}
                                zoom={10}>

                                <Place
                                    className="img-responsive"
                                    lat={x}
                                    lng={y}
                                    text={
                                        <img src={startMark} alt="Start Mark"
                                             className="start-point"/>}
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
                                                   text={<img src={finishMark} alt="Finish Mark"
                                                              className="nearest-point"/>}
                                            />
                                        )
                                    })
                                }
                            </GoogleMap>
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <p>Kliknij na mapie, by zobaczyć znaczniki:</p>
                        <img src={startMark} alt="Start Mark"/><br/>
                        <span>Twoja lokalizacja</span><br/>
                        <img src={finishMark} alt="Finish Mark"/><br/>
                        <span>Najbliższy gabinet</span>

                        {this.state.officesData.filter(function (office) {
                            return office.id === nearestOffice
                        })
                            .map(function (officeId) {
                                return (
                                    <Link to={`/offices/${officeId.id}`}
                                          key={officeId.id}
                                    >
                                        <Panel className="nearest-vet-container">
                                            <p><img src={officeId.logo} alt={"Logo gabientu"} className="img-responsive vet-search-img "/> </p>
                                            <p><strong>{officeId.officeName}</strong></p>
                                            <p>{officeId.officeAddress}</p>
                                        </Panel>
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