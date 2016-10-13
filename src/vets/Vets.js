import React from 'react';
import vetData from '../data/vets'

export default class Vets extends React.Component {

    render() {
        return (
            <div>
                {vetData.map(function(vet) {
                    return (
                        <div className="vets">
                            <img src={vet.photo.src}/> {vet.firstName} {vet.lastName} {vet.office} Porady:
                        </div>
                    )
                })}
            </div>
        )
    }
}



