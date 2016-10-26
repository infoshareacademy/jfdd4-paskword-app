import React from 'react';
import '../Vets.css';
import {Grid, Col, Row, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    fetchingVets: state.vetsData.fetchingVets,
});

class List extends React.Component {

    render() {
        var {
            vets,
            fetchingVets,
        } = this.props;

        return (

            <Grid>
                <Row className="flexbox">
                    {fetchingVets ? <p>Ładuję weterynarzy...</p> : null}

                    {vets
                        .map((vet, index) => (

                            <Col xs={12} sm={6}>
                                   <ListGroup className="vets-list">
                                       <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                            <h3>{vet.firstName} {vet.lastName}</h3>
                                        </Link>
                                   </ListGroup>
                            </Col>
                        ))
                    }

                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(List)