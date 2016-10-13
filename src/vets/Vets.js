import React from 'react';
import vetsData from '../data/vets';
import advices from '../data/advices'
import './Vets.css';
import {Media} from 'react-bootstrap';

export default class Vets extends React.Component {

    constructor() {
        super();
        this.state = {
            vets: [],
            advices: [],
            isLoading: true
        };
        this._assignAdvices = this._assignAdvices.bind(this);
    }

    componentWillMount() {
        this.setState({
            vets: vetsData,
            advices: advices,
            isLoading: false
        });
        this._assignAdvices();
    }

    _assignAdvices() {
        var vets = this.state.vets;
        var vetNumber = this.state.vets.length;

        var vetsWith = vets.map(function(vet, i) {
           vet[i].advices = [];

        });
        console.log(vetsWith);
        vets.advices.forEach(function(advice) {
            var randomNumber = Math.floor((Math.random() * vetNumber) +1);
            vets[randomNumber].advices.push(advice);
            }
        )
    }

    render() {
        var allVetsData = this.state.vets,
            advices = this.state.advices;

        return (
            <div>
                {console.log(advices)};
                {this.state.isLoading ? 'Loading list of our vets...' : null}
                {allVetsData.map(function(vet) {
                    return (
                        <Media>
                            <Media.Left align="top">
                                <img src={vet.photo} alt={vet.firstName}/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading> {vet.firstName} {vet.lastName} </Media.Heading>
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



