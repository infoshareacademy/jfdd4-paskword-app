import React from 'react';
import vets from '../data/vets'

// import Advice from './advice/Advice';
// import Map from './map/Map';



// export default class Vet extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             vet: []
//         }
//     }
//

class Vet extends Component {
    render() {
        return (

            <div className="Vet">
                <h1>Vet</h1>
                <p>{props.params.firstName}</p>
                <p>{props.params.lastName}</p>
                <p>{props.params.photo}</p>
                <p>{props.params.office}</p>
                <p>{props.params.email}</p>
                <p>{props.params.phone}</p>
                <p>{props.params.coordinates}</p>
            </div>
        );
    }
}

export default Vet



