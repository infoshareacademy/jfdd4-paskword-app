import React from 'react';
import '../Vet.css';
import {Link} from 'react-router';

export default class Tab1 extends React.Component {

    render() {
        return (
            <div>
                {this.props.fetchingVet ? "Ładuję..." : null}
                <strong>
                    <p> {this.props.vet.firstName} {this.props.vet.lastName} </p>
                </strong>
                <p> <img src={this.props.vet.photo}
                         alt={this.props.vet.lastName}/> </p>
                <p> Przychodnie: </p>
                {this.props.fetchingVetOffices ? <p>'Ładuję przychodnie...'</p> : null}
                <ul>
                    {this.props.vetOffices.map(function (office) {
                        return (
                            <Link key={office.id} to={`/offices/` + parseInt(office.id, 10) }>
                                {office.officeName} <br />
                            </Link>
                        )
                    })}
                </ul>
                <p> E-mail: {this.props.vet.email} </p>
                <p> Telefon: +{this.props.vet.phone} </p>
            </div>
        )
    }
}