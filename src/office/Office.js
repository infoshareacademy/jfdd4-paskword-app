import React from 'react';
import officesData from '../data/offices.js';
import vetsData from '../data/vets.js';
// import Map from './map/Map';
import {
    Grid,
    Row,
    Col
}
    from 'react-bootstrap';


export default class Office extends React.Component {
    constructor(props) {
        super();

        this.state = {
            office: [],
            vets: [],
            isLoading: true,
            officeId: parseInt(props.params.officeId)
        }
        console.log(props);
    }

    componentWillMount() {
            this.setState({
                office: officesData,
                vets: vetsData,
                isLoading: false
            })
    }


    render() {
        var currentOfficeId = this.state.officeId;
        //finding office object with ID from Router
        var oneOffice = this.state.office.find(function(office){
            return office.id === currentOfficeId;
        });
        var allVetsData = this.state.vets;
        console.log('Gabinet', oneOffice);
        console.log('Weterynarze', allVetsData);
        return (
            <Grid className="Office">
                {this.state.isLoading ? 'Loading iformation about choosen vet office...' : null}
                <Row>
                    <h1>Gabinet</h1>
                    <p>{oneOffice.officeName}</p>
                    <p>{oneOffice.officeAddress}</p>
                    <p>"Przyjmujący weterynarze:"
                        <ul>
                            {oneOffice.vetIds.map(function (vetID) {
                                return (
                                    <li key={vetID}>
                                        {allVetsData.length === 0 ?
                                            <span>Ładuje się lista lekarzy...</span> :
                                            vetsData.filter(function (vet) {
                                                return vet.id === vetID
                                            }).map(function (oneVet) {
                                                return oneVet.firstName + ' ' + oneVet.lastName;
                                            })
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </p>
                </Row>
            </Grid>
        );
    }
}