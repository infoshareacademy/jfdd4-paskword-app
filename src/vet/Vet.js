import React from 'react';
import vetsWithAdvices from '../data/vetsWithAdvices';

// import Advice from './advice/Advice';
// import Map from './map/Map';



export default class Vet extends React.Component {
    constructor() {
        super();
        this.state = {
            vet: {
                id: 'Loading',
                firstName: 'Loading',
                lastName: 'Loading',
                photo: 'Loading',
                office: 'Loading',
                email: 'Loading',
                phone: 'Loading',
                advices: []
            }
        }
    }

    componentWillMount() {

        setTimeout( function () {
            this.setState({
                vet: vetsWithAdvices[this.props.params.vetId - 1]
            });

        }.bind(this), 1000);
    }


    render() {
        return (

            <div className="Weterynarz">
                <h1>Weterynarz</h1>
                <p>{this.state.vet.firstName} {this.state.vet.lastName}</p>
                <p><img src={this.state.vet.photo} alt={this.state.vet.lastName} /></p>
                <p>Przychodnia: {this.state.vet.office}</p>
                <p>E-mail: {this.state.vet.email}</p>
                <p>Telefon: +{this.state.vet.phone}</p>
                <p>Liczba porad: {this.state.vet.advices.length}</p>
                {this.state.vet.advices.length == 0 ? "Brak porad do wyświetlenia" : "Porady lekarza:"}
                    {this.state.vet.advices.map(function(advice) {
                        return (
                            <div>
                                <p>Tag: {advice.tag}</p>
                                <p>Porada: {advice.advice} </p>
                            </div>
                        )
                    })}
            </div>
        );
    }
}



