import React from 'react';
import GoogleMap from 'google-map-react';
import Place from '../place/Place';
import './map-style.css';
import '../data/vets.js';
import officehMark from '../place/finish.png'
import { Row, Col, OverlayTrigger, Tooltip, Popover} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {hidePopover} from './actionCreators'


const mapStateToProps = (state) => ({
    points: state.mapData.points,
    fetchingPoints: state.mapData.fetchingPoints,
    visibilityPopover: state.mapData.visibilityPopover
});

const mapDispatchToProps = (dispatch) => ({
    hidePopover: () => dispatch(hidePopover())
})


class Map extends React.Component {
    render() {
        var {
            points,
            fetchingPoints,
            hidePopover,
            visibilityPopover
        }=this.props;

        return (
                    <Row>
                        {fetchingPoints ? <p>Ładowanie mapy, proszę czekać...</p> : null}
                        <Col sm={12}>
                            <div className="mapMain">
                                <GoogleMap
                                    bootstrapURLKeys={{
                                        key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                        language: 'pl'
                                    }}
                                    center={[54.3434247232928, 18.52667212486267]}
                                    zoom={11}>
                                    {visibilityPopover ?
                                        <Place text={

                                        <Popover
                                            className="popover-style"
                                            id="popover-basic"
                                            placement="left"
                                            positionLeft={20}
                                            positionTop={30}
                                            title="Wszystkie gabinety weterynaryjne"
                                            onClick={() => hidePopover()}>
                                            Kliknij w dany punkt, by przejść do wybranego gabinetu.
                                        </Popover>}
                                        />
                                        : null }

                                    {points
                                        .map(function (officeGPSPoint) {
                                            var tooltip = (
                                                <Tooltip id="tooltip">
                                                    <h2>{officeGPSPoint.officeName}</h2>
                                                    <img src={officeGPSPoint.logo} className="responsive"/>
                                                    <p>{officeGPSPoint.officeAddress}</p>
                                                </Tooltip>)
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
                                        })
                                    }
                                </GoogleMap>
                            </div>
                        </Col>
                    </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)