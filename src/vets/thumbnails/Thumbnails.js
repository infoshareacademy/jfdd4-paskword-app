import React from 'react';
import '../Vets.css';
import {Grid, Col, Row, Thumbnail} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    fetchingVets: state.vetsData.fetchingVets,
    offices: state.officesData.offices,
    fetchingOffices: state.officesData.fetchingOffices,
});

class Thumbnails extends React.Component {

    render() {
        var {
            vets,
            fetchingVets,
            offices,
            fetchingOffices
        } = this.props;

        return (

            <Grid>
                <Row className="flexbox">
                    {fetchingVets ? <p>Ładuję weterynarzy...</p> : null}

                    {vets
                        .map((vet, index) => (

                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Thumbnail src={vet.photo} alt={vet.firstName} className="img-responsive vets-img"
                                           id={vet.firstName}>
                                    <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                        <h3>{vet.firstName} {vet.lastName}</h3>
                                    </Link>
                                    <p>E-mail: {vet.email}</p>
                                    <p>Telefon: {vet.phone}</p>

                                    <p>Przychodnie:</p>
                                    {fetchingOffices ? <p>Ładuję przychodnie...</p> : null}
                                    <ul>
                                        {offices
                                            .filter(function (office) {
                                                var result = office.vetIds.indexOf(vet.id) !== -1;
                                                return result
                                            })
                                            .map(function (item) {
                                                return item
                                            })
                                            .map(function (office) {
                                                return (
                                                    <Link key={office.officeName}
                                                          to={`/offices/` + parseInt(office.id, 10)}>
                                                        <p>{office.officeName}</p>
                                                    </Link>
                                                )
                                            })}
                                    </ul>
                                    <p>Liczba porad lekarza: {vet.advices.length}</p>
                                </Thumbnail>
                            </Col>
                        ))
                    }

                </Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps)(Thumbnails)