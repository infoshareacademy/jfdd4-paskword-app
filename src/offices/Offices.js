import React from 'react';
import styles from '../css/offices.css'
import officesData from '../data/offices.js'
// import Map from './map/Map';


export default class Offices extends React.Component {
    constructor() {
        super();
        this.state = {
            vetsOffices: []
        }
    }

    componentWillMount() {
        this.setState({
            vetsOffices: officesData
        });
        console.dir(officesData);
    }

    render() {
        var allOfficesData = this.state.vetsOffices;

        return (
            <div className="offices">
                {allOfficesData.map(function (office) {
                    return (
                        <div key={office.id}>
                            <span>{office.officeName}</span>
                            <br/>
                            <span>{office.officeAddress}</span>
                            <br/>
                            <span>{office.vetsNumber}</span>
                        </div>

                    )
                })}
            </div>
        )
    }
}

