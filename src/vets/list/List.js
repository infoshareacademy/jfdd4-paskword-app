import React from 'react';
import '../Vets.css';
import {Grid, Col, Row, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    fetchingVets: state.vetsData.fetchingVets,
    matchName: state.vetsData.matchName,
});

class List extends React.Component {

    render() {
        var {
            vets,
            fetchingVets,
            matchName,
        } = this.props;

        return (

            <Grid>
                <Row className="flexbox">
                    {fetchingVets ? <p>Ładuję weterynarzy...</p> : null}

                    {vets
                        .filter(function(vet) {
                            var fullName = (vet.firstName + ' ' + vet.lastName).toLowerCase();
                            var reversedFullName = (vet.lastName + ' ' + vet.firstName).toLowerCase();
                            return fullName.indexOf(matchName.toLowerCase()) !== -1 || reversedFullName.indexOf(matchName.toLowerCase()) !== -1
                        })
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