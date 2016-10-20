import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import './map-style.css';
import '../data/vets.js';
import officesData from '../data/offices.js'
import officehMark from '../place/finish.png'
import {Grid, Row, Col, OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';
import {Link} from 'react-router';


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
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className="mapMain">
                                <GoogleMap
                                    bootstrapURLKeys={{
                                        key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                        language: 'pl'
                                    }}
                                    center={[54.3434247232928, 18.52667212486267]}
                                    zoom={11}>
                                    <Place text={
                                        <Popover
                                            id="popover-basic"
                                            placement="none"
                                            positionLeft={20}
                                            positionTop={30}
                                            title="Wszystkie gabinety weterynaryjne">
                                            Kliknij w dany punkt, by przejść do wybranego gabinetu.
                                        </Popover>}/>
                                    {officeP.map(function (officeGPSPoint) {
                                        const tooltip = (
                                            <Tooltip id="tooltip">
                                                <h2>{officeGPSPoint.officeName}</h2>
                                                <img src={officeGPSPoint.logo} className="responsive"/>
                                                <p>{officeGPSPoint.officeAddress}</p>
                                            </Tooltip>
                                        );
                                        return (

                                            <Place key={officeGPSPoint.id}
                                                   lat={officeGPSPoint.coordinates.latitude}
                                                   lng={officeGPSPoint.coordinates.longitude}
                                                   text={
                                                       <Link to={`/offices/${officeGPSPoint.id}`}>
                                                           <OverlayTrigger placement="top" overlay={tooltip}>
                                                               <img src={officehMark} alt="Gabinet Weterynaryjny"
                                                                    className="pointer-main-map"/>
                                                           </OverlayTrigger>
                                                       </Link>
                                                   }/>
                                        )
                                    })}
                                </GoogleMap>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}