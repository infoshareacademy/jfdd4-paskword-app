import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import styles from './map-style.css';
import vetsData from '../data/vets.js';
import officesData from '../data/offices.js'
import officehMark from '../place/finish.png'
import {Grid, Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
                <Row>
                    <Col sm={12} md={12}>
                        <div className="mapMain">
                            <GoogleMap
                                center={[54.34765228612492, 18.646116256713867]}
                                zoom={11}>
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
                                                           <img src={officehMark} alt="Gabinet Weterynaryjny"/>
                                                       </OverlayTrigger>
                                                   </Link>
                                               }/>
                                    )
                                })}
                            </GoogleMap>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}