import React from 'react';
import Advice from '../advice/Advice'
import {Row, Col, Thumbnail, Panel} from 'react-bootstrap'
import {Link} from 'react-router';
import './single-advice-style.css'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    advices: state.advicesData.advices,
    fetchingAdvices: state.advicesData.fetchingAdvices
})


class SingleAdvice extends React.Component {
    constructor(props) {
        super();

        this.state = {
            adviceId: parseInt(props.params.adviceId),
        }
    }

    render() {

        var {
            vets,
            advices,
            currentAdviceId = this.state.adviceId,
            fetchingAdvices
        }=this.props;

        return (
            <Row>
                {fetchingAdvices ? "Trwa ładowanie danych..." : null}
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

export default connect(mapStateToProps)(SingleAdvice)