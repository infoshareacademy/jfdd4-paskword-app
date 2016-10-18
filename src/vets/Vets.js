import React from 'react';
import vetsWithAdvices from '../data/vetsWithAdvices';
import officesData from '../data/offices.js';
import './Vets.css';
import {Media} from 'react-bootstrap';
import { Link } from 'react-router';

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
            vetId = this.state.vets.id,
            offices = this.state.offices;
        return (
            <div>
                {this.state.isLoading ? 'Loading list of our vets...' : null}
                {allVetsData.map(function(vet, index) {
                    return (
                        <Media>
                            <Media.Left align="top">
                                <img src={vet.photo} alt={vet.firstName}/>
                            </Media.Left>
                            <Media.Body>
                                <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                    <Media.Heading> {vet.firstName} {vet.lastName} </Media.Heading>
                                </Link>
                                <p>Przychodnie:</p>
                                    {offices.length === 0 ?
                                        'Ładuję przychodnie...' : null}
                                    <ul>
                                        {offices
                                            .filter(function (office) {
                                                var result = office.vetIds.indexOf(vet.id) !== -1
                                                {console.log(office.vetIds)}
                                                return result
                                            })
                                            .map(function (item) {
                                                return item
                                            })
                                            .map(function (office) {
                                                return (
                                                    <Link to={`/offices/` + parseInt(office.id, 10) }>
                                                        <p>{office.officeName}</p>
                                                    </Link>
                                                )
                                            })}
                                    </ul>

                                <p>Liczba porad lekarza: {vet.advices.length}</p>
                            </Media.Body>
                        </Media>
                    )
                })}
            </div>
        )
    }
}



