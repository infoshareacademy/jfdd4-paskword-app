import React from 'react';
import './offices-styles.css';
import officesData from '../data/offices.js';
import {Link} from 'react-router';
import {
    Grid,
    Row,
    Col,
    Panel
}
    from 'react-bootstrap';
import Rcslider from 'rc-slider';
import '../../node_modules/rc-slider/assets/index.css'


export default class Offices extends React.Component {
    constructor() {
        super();
        this.state = {
            vetsOffices: [],
            isLoading: true,
            minValue: 1,
            maxValue: 10
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
            <Grid>
                <Row>
                    <Col xs={12} mdOffset={2} md={10}>
                        <Rcslider
                            className="rc-slider"
                            min={this.state.minValue}
                            max={this.state.maxValue}
                            step={1}
                            range={true}
                            defaultValue={[this.state.minValue,this.state.maxValue]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} mdOffset={2} md={10}>
                        {this.state.isLoading ? 'Loading list of veterinary offices....' : null}
                        {allOfficesData.map(function (office) {
                            return (
                                <Link to={`/offices/${office.id}`}
                                      key={office.id}>
                                    <Panel className="office-list-container">
                                        <Col xs={12} md={2}>
                                            <img src={office.logo} alt="Logo"/>
                                        </Col>
                                        <Col xs={12} md={10}>
                                            <span><strong>{office.officeName}</strong></span>
                                            <br/>
                                            <span>{office.officeAddress}</span>
                                            <br/>
                                            <span>Liczba lekarzy: {office.vetIds.length}</span>
                                        </Col>
                                    </Panel>
                                </Link>
                            )
                        })}
                    </Col>
                </Row>
            </Grid>
        )
    }
}