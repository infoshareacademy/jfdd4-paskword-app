import React from 'react';
import '../Vet.css';
import { Col } from 'react-bootstrap'

export default class Tab2 extends React.Component {

    render() {

        return (
            <div>
                {this.props.fetchingVets ? "Ładuję..." : null}
                <p> Liczba porad: {this.props.vet.advices.length} </p>

                {this.props.vet.advices.length === 0 ? "Brak porad do wyświetlenia" : null }

                {this.props.vet.advices
                    .filter(this.props.activeFilter.predicate)
                    .map(function (advice) {
                        return (
                            <div key={advice.id}>
                                <Col xs={10} xsOffset={1} sm={8} smOffset={2}
                                     className="advice">
                                    <p>Tag: {advice.tag}</p>
                                    <p>{advice.advice}</p>
                                </Col>
                            </div>
                        )
                    })}
            </div>
        )
    }
}