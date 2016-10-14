import React from 'react';
import vets from '../data/vets'
// import Map from './map/Map';
// import Advice from './advice/Advice';




export default class Vet extends React.Component {
    constructor() {
        super()

        this.state = {
            vet: {
                firstName: 'Loading',
                lastName:'Loading',
                photo: 'Loading',
                office: 'Loading',
                email: 'Loading',
                phone: 'Loading',
                coordinates: 'Loading'
            }
        }
    }



    componentWillMount() {

        setTimeout( function () {
            this.setState({
                vet: vets[0]
            });

        }.bind(this), 1000);
    }


    render() {
        console.log(this.state.vet);
        return (

            <div className="Weterynarz">
                <h1>Vet</h1>
                <p>{this.state.vet.firstName}</p>
                <p>{this.state.vet.lastName}</p>
                <p><img src={this.state.vet.photo} /></p>
                <p>{this.state.vet.office}</p>
                <p>{this.state.vet.email}</p>
                <p>{this.state.vet.phone}</p>
            </div>
        );
    }
}



