import React from 'react';
import officesData from '../data/offices.js';
import vetsData from '../data/vets.js';
import Place from '../place/Place'
import './office-style.css';
import officehMark from '../place/finish.png'
import {
    Grid,
    Row,
    Col,
    Panel
}
    from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import {Link} from 'react-router';


export default class Office extends React.Component {
    constructor(props) {
        super();

        this.state = {
            office: [],
            vets: [],
            isLoading: true,
            officeId: parseInt(props.params.officeId)
        }
        console.log(props);
    }

    componentWillMount() {
        this.setState({
            office: officesData,
            vets: vetsData,
            isLoading: false
        })
    }


    render() {
        var currentOfficeId = this.state.officeId;
        //finding office object with ID from Router
        var oneOffice = this.state.office.find(function (office) {
            return office.id === currentOfficeId;
        });
        var allVetsData = this.state.vets;
        return (
            <Grid className="Office container">
                <Panel className="vet-list-container">
                    {this.state.isLoading ? 'Loading iformation about choosen vet office...' : null}
                    <Row>
                        <Col sm={12} md={12}>
                            <h3>{oneOffice.officeName}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={2}>
                            <img src={oneOffice.logo} className="responsive"/>
                        </Col>
                        <Col xs={12} md={5}>
                            <p>{oneOffice.officeAddress}</p>
                            <p>Przyjmujący weterynarze:
                                <ul>
                                    {oneOffice.vetIds.map(function (vetID) {
                                        return (
                                            <li key={vetID}>
                                                {allVetsData.length === 0 ?
                                                    <span>Ładuje się lista lekarzy...</span> :
                                                    vetsData.filter(function (vet) {
                                                        return vet.id === vetID
                                                    }).map(function (oneVet) {
                                                        return (
                                                            <Link to={`/vets/` + parseInt(oneVet.id, 10) }>
                                                                {oneVet.firstName + ' ' + oneVet.lastName}
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </li>
                                        )
                                    })}
                                </ul>
                            </p>
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="office-map">
                                <GoogleMap
                                    bootstrapURLKeys={{
                                        key: 'AIzaSyCJSyocAtUnWSKhjyqZlJtmaf_afdJcOkA',
                                        language: 'pl'
                                    }}
                                    center={[oneOffice.coordinates.latitude, oneOffice.coordinates.longitude]}
                                    zoom={13}>
                                    <Place key={oneOffice.id}
                                           lat={oneOffice.coordinates.latitude} lng={oneOffice.coordinates.longitude}
                                           text={<img src={officehMark} alt="Gabinet Weterynaryjny" className="pointer-one-office"/>}/>
                                </GoogleMap>
                            </div>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
}