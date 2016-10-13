import React from 'react';
import styles from './offices.css'
import officesData from '../data/offices.js'
// import Map from './map/Map';


export default class Offices extends React.Component {
    constructor() {
        super();
        this.state = {
            vetsOffices: [],
            isLoading: true
        }
    }

    componentWillMount() {
        this.setState({
            vetsOffices: officesData,
            isLoading: false
        });
    }

    render() {
        var allOfficesData = this.state.vetsOffices;

        return (
            <div className="offices">
                {this.state.isLoading ? 'Loading list of veterinary offices....' : null}
                {allOfficesData.map(function (office) {
                    return (
                        <div key={office.id} className="offices">
                            <img src="#"/>
                            <span>{office.officeName}</span>
                            <br/>
                            <span>{office.officeAddress}</span>
                            <br/>
                            <span>Liczba lekarzy: {office.vetsNumber}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

