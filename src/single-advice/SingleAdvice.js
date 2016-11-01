import React from 'react';
import Advice from '../advice/Advice'
import {Row, Col, Thumbnail, Panel} from 'react-bootstrap'
import advicesData from '../data/advices'
import vetsData from '../../public/data/vetsWithAdvices.json'
import {Link} from 'react-router';
import './single-advice-style.css'


export default class SingleAdvice extends React.Component {
    constructor(props) {
        super();

        this.state = {
            advicesData: [],
            adviceId: parseInt(props.params.adviceId),
            vetsData: []
        }
    }

    componentWillMount() {
        this.setState({
            advicesData: advicesData,
            vetsData: vetsData
        })
    }

    render() {
        var advices = this.state.advicesData;
        var currentAdviceId = this.state.adviceId;
        var vets = this.state.vetsData;

        return (
            <Row>
                {advices
                    .filter((advice) => advice.id === currentAdviceId)
                    .map((advice) => (
                        <Col key={advice.id}
                             xs={12} mdOffset={4} md={4}>
                            <Panel className="advice-panel">
                                <h3>Porada weterynaryjna:</h3>
                                <Advice title={'Porada dotycząca hasła: ' + advice.tag}
                                        text={advice.advice}
                                        url={`http://app.paskword.jfdd4.is-academy.pl/advices/${advice.id}`}/>
                                {vets
                                    .filter((vet) => vet.advices.length > 0)
                                    .map(function (vet) {
                                        for (var advice in vet.advices) {
                                            if (vet.advices[advice].id === currentAdviceId) {
                                                return (
                                                    <p key={vet.id}>
                                                        Tej porady udzielił-a doktor
                                                        <Link to={`/vets/${vet.id}`}
                                                        >
                                                            {' ' + vet.firstName + ' ' + vet.lastName}
                                                        </Link>
                                                    </p>
                                                )
                                            }
                                        }
                                    })


                                }
                            </Panel>
                        </Col>
                    ))}

            </Row>
        )
    }
}
