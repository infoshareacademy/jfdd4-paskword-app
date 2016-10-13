import React from 'react';
import vetsData from '../data/vets';
import advices from '../data/advices';
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
    }

    _assignAdvices() {
        var vets = this.state.vets;
        var vetNumber = this.state.vets.length;
        var advices = this.state.advices;
        var vetsWithAdvice = vets.map(function(vet) {
           vet.advices = [];
            return vet;
        });
        advices.forEach(function(advice) {
            var randomNumber = Math.floor((Math.random() * vetNumber) +1);
            vetsWithAdvice[randomNumber-1].advices.push(advice);
            }
        );
        this.state.vets = vetsWithAdvice;
    }

    render() {
        this._assignAdvices();
        var allVetsData = this.state.vets;
        return (
            <div>
                {console.log(allVetsData)};
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



