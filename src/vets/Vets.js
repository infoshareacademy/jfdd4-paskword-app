import React from 'react';
import vetsWithAdvices from '../data/vetsWithAdvices';
import officesData from '../data/offices.js';
import './Vets.css';
import {Grid, Col, Panel} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Vets extends React.Component {

    constructor() {
        super();
        this.state = {
            vets: [],
            offices: [],
            isLoading: true
        };
    }

    componentWillMount() {
        this.setState({
            vets: vetsWithAdvices,
            offices: officesData,
            isLoading: false
        });
    }

    render() {
        var allVetsData = this.state.vets,
            offices = this.state.offices;
        return (
            <Grid>
                {this.state.isLoading ? 'Loading list of our vets...' : null}
                {allVetsData.map(function (vet, index) {
                    return (
                        <Col xs={12} mdOffset={2} md={10} key={vet.id}>
                            <Panel className="vet-list-container">
                                <Col xs={12} mdOffset={2} md={4}>
                                    <img src={vet.photo} alt={vet.firstName}/>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                        <strong>{vet.firstName} {vet.lastName}</strong>
                                    </Link>
                                    <p>Przychodnie:</p>
                                    {offices.length === 0 ?
                                        'Ładuję przychodnie...' : null}
                                    <ul>
                                        {offices
                                            .filter(function (office) {
                                                var result = office.vetIds.indexOf(vet.id) !== -1
                                                {
                                                    console.log(office.vetIds)
                                                }
                                                return result
                                            })
                                            .map(function (item) {
                                                return item
                                            })
                                            .map(function (office) {
                                                return (
                                                    <Link key={office.officeName}
                                                        to={`/offices/` + parseInt(office.id, 10)}>
                                                        <p>{office.officeName}</p>
                                                    </Link>
                                                )
                                            })}
                                    </ul>
                                    <p>Liczba porad lekarza: {vet.advices.length}</p>
                                </Col>
                            </Panel>
                        </Col>
                    )
                })}
            </Grid>
        )
    }
}



