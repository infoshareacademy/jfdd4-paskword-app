import React from 'react';
import Advice from '../advice/Advice'
import {Row, Col} from 'react-bootstrap'
import advicesData from '../data/advices'



export default class SingleAdvice extends React.Component {
    constructor(props) {
        super();

        this.state = {
            advicesData: [],
            adviceId: parseInt(props.params.adviceId)
        }
    }


    componentWillMount() {
        this.setState({
            advicesData: advicesData
        })
    }

    render() {
        var advices = this.state.advicesData;
        var currentAdviceId = this.state.adviceId;

        return (
            <Row>
                {advices
                    .filter((advice) => advice.id === currentAdviceId)
                    .map((advice) => (
                <Col xs={12} mdOffset={4} md={4}>
                    <Advice title={'Porada dotycząca hasła: ' + advice.tag}
                            text={advice.advice}
                            url={`http://app.paskword.jfdd4.is-academy.pl/advices/${advice.id}`}/>
                </Col>
                    ))}
            </Row>
        )
    }
}
