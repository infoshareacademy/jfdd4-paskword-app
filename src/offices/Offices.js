import React from 'react';
import './offices-styles.css';
import '../data/offices.js';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {
    Grid,
    Row,
    Col,
    Panel
}
    from 'react-bootstrap';
import Rcslider from 'rc-slider';
import '../../node_modules/rc-slider/assets/index.css';


const mapDispatchToProps = (state) => ({
    vetsOffices: state.officesData.offices,
    fetchingOffices: state.officesData.fetchingOffices
});

const mapDispatchToProps = (dispatch) => ({});

class Offices extends React.Component {
    render() {
        var {
            vetsOffices,
            fetchingOffices,
            minValue = 1,
            maxValue = 10
        }=this.props;

        return (
            <Grid>
                <Row>
                    <Col xs={12} mdOffset={2} md={10}>
                        <Rcslider
                            className="rc-slider"
                            min={minValue}
                            max={maxValue}
                            step={1}
                            range={true}
                            defaultValue={[minValue,maxValue]}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} mdOffset={2} md={10}>
                        {fetchingOffices ? 'Proszę czekać, trwa ładowanie listy gabinetów...' : null}
                        {vetsOffices.map(function (office) {
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

export default connect(mapDispatchToProps, mapDispatchToProps)(Offices)