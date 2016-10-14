import React from 'react';
import styles from './offices.css';
import officesData from '../data/offices.js';
import { Link } from 'react-router';
import {
    Grid,
    Row,
    Col
}
    from 'react-bootstrap';


export default class Offices extends React.Component {
    constructor() {
        super();
        this.state = {
            vetsOffices: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.setState({
            vetsOffices: officesData,
            isLoading: false
        });
    }

    render() {
        var allOfficesData = this.state.vetsOffices;

        return (
            <div className="offices">
                {this.state.isLoading ? 'Loading list of veterinary offices....' : null}
                {allOfficesData.map(function (office, index) {
                    return (
                        <Link to={'/offices/' + index}>
                        <Row key={office.id} className="offices">
                            <Col xs={12}  md={2} ><
                                img src={office.logo} className="responsive"/>
                            </Col>
                            <Col xs={12} md={10}>
                                <span>{office.officeName}</span>
                                <br/>
                                <span>{office.officeAddress}</span>
                                <br/>
                                <span>Liczba lekarzy: {office.vetIds.length}</span>
                            </Col>
                        </Row>
                        </Link>
                    )
                })}
            </div>
        )
    }
}