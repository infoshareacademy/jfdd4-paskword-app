import React from 'react';
import vetsData from '../data/vets';
import './Vets.css';
import {Media} from 'react-bootstrap';

export default class Vets extends React.Component {

    constructor() {
        super();
        this.state = {
            vets: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.setState({
            vets: vetsData,
            isLoading: false
        });
    }

    render() {
        var allVetsData = this.state.vets;

        return (
            <div>
                {this.state.isLoading ? 'Loading list of our vets...' : null}
                {allVetsData.map(function(vet) {
                    return (
                        <Media>
                            <Media.Left align="top">
                                <img src={vet.photo.src}/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading> {vet.firstName} {vet.lastName} </Media.Heading>
                                <p>Przychodnia: {vet.office}</p>
                                <p>Porada lekarza: </p>
                            </Media.Body>
                        </Media>
                    )
                })}
            </div>
        )
    }
}



