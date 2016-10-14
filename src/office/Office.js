import React from 'react';
import offices from '../data/offices'
// import Map from './map/Map';

export default class Office extends React.Component {
    constructor() {
        super()

        this.state = {
            office: {
                officeName: 'Loading',
                officeAddress: 'Loading',
                vetsNumber: 'Loading'
            }
        }
    }

    componentWillMount() {

        setTimeout( function () {
            this.setState({
                office: offices[0]
            });

        }.bind(this), 1000);
    }


    render() {
        console.log(this.state.office);
        return (

            <div className="Office">
                <h1>Gabinet</h1>
                <p>{this.state.office.officeName}</p>
                <p>{this.state.office.officeAddress}</p>
                <p>" Liczba weterynarzy " {this.state.office.vetsNumber}</p>
            </div>
        );
    }
}