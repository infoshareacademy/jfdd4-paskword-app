import React from 'react';
import vetsWithAdvices from '../data/vetsWithAdvices';
import './Vets.css';
import {Media} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Vets extends React.Component {

    constructor(props) {
        super();
        this.state = {
            vets: [],
            isLoading: true
        };
    }

    componentWillMount() {
        this.setState({
            vets: vetsWithAdvices,
            isLoading: false
        });
    }

    render() {
        var allVetsData = this.state.vets;
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
                                <p>Przychodnia: {vet.office}</p>
                                <p>Liczba porad lekarza: {vet.advices.length}</p>
                            </Media.Body>
                        </Media>
                    )
                })}
            </div>
        )
    }
}



