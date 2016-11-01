import React from 'react';
import '../Vet.css';
import {Col, Panel} from 'react-bootstrap';
import Advice from '../../advice/Advice'


export default class Tab2 extends React.Component {

    render() {
        var vet = this.props.vet;

        return (

            <div>
                {this.props.fetchingVets ? "Ładuję..." : null}
                <p> Liczba porad: {this.props.vet.advices.length} </p>

                {vet.advices.length === 0 ? "Brak porad do wyświetlenia" : null }

                {vet.advices
                    .filter(this.props.activeFilter.predicate)
                    .map(function (advice) {
                        return (
                            <div key={advice.id}>
                                <Col xs={10} xsOffset={1} sm={8} smOffset={2}
                                     className="advice">
                                    <Advice
                                        title={'Porady dotyczące hasła: ' + advice.tag}
                                        text={advice.advice}
                                        url={`http://app.paskword.jfdd4.is-academy.pl/advices/${advice.id}`}
                                    />
                                </Col>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

