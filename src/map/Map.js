import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import './map-style.css';
import '../data/vets.js';
import officesData from '../data/offices.js'
import officehMark from '../place/finish.png'
import {Grid, Row, Col, OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    points: state.mapData.points,
    fetchingPoints: state.mapData.fetchingPoints
});

const mapDispatchToProps = (dispatch) => ({})


class Map extends React.Component {
    render() {
        var {
            points,
            fetchingPoints,
            tooltip = (
                <Tooltip id="tooltip">
                    <h2>{points.officeName}</h2>
                    <img src={points.logo} className="responsive"/>
                    <p>{points.officeAddress}</p>
                </Tooltip>
            )
        }=this.props;
        console.log('Dane punktów:', points);
        return (
            <div>
                <Grid>
                    {fetchingPoints ? <p>Ładowanie mapy, proszę czekać...</p> : null}
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


                                    {points
                                        .map((officeGPSPoint) => (

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
                                        )
                                    }
                                </GoogleMap>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)