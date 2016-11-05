import React from 'react';
import '../Vets.css';
import {Grid, Col, Row, Thumbnail, ListGroup, ListGroupItem, Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {deleteFromFavourite} from '../../app/actionCreators'

const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    fetchingVets: state.vetsData.fetchingVets,
    offices: state.officesData.offices,
    fetchingOffices: state.officesData.fetchingOffices,
    matchName: state.vetsData.matchName,
    favouriteVetIds: state.favourites.favouriteVetIds
});

const mapDispatchToProps = (dispatch) => ({
    deleteFromFavourite: (vetId) => dispatch(deleteFromFavourite(vetId))
})

class ThumbnailsFavourites extends React.Component {

    render() {
        var {
            vets,
            fetchingVets,
            offices,
            fetchingOffices,
            matchName,
            favouriteVetIds,
            deleteFromFavourite
        } = this.props;

        return (

            <Grid>
                {favouriteVetIds.length == 0 ? <h3>Nie masz ulubionych weterynarzy</h3>
                    :
                    <Row className="flexbox thumb-row">
                        {fetchingVets ? <p>Ładuję weterynarzy...</p> : null}
                        {favouriteVetIds.map((favVetId) =>
                            vets
                                .filter((vet) => vet.id === favVetId)
                                .filter(function (vet) {
                                    var fullName = (vet.firstName + ' ' + vet.lastName).toLowerCase();
                                    return fullName.indexOf(matchName.toLowerCase()) !== -1
                                })
                                .map((vet, index) => (
                                    <Col className="thumb-col"
                                         key={index} xs={12} sm={6} md={4} lg={3}>

                                        <Thumbnail src={vet.photo}
                                                   alt={vet.firstName}
                                                   className="img-responsive vets-img image-rounded"
                                                   id={vet.firstName}>
                                            <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                                <h3>{vet.firstName} {vet.lastName}</h3>
                                            </Link>
                                            <p>E-mail: {vet.email}</p>
                                            <p>Telefon: {vet.phone}</p>

                                            <p>Przychodnie:</p>
                                            {fetchingOffices ? <p>Ładuję przychodnie...</p> : null}
                                            <ListGroup>
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
                                                                <ListGroupItem
                                                                    className='single-list-element'>{office.officeName}</ListGroupItem >
                                                            </Link>
                                                        )
                                                    })}
                                            </ListGroup>
                                            <p>Liczba porad lekarza: {vet.advices.length}</p>
                                            {favouriteVetIds.indexOf(vet.id) > -1 ?
                                                <Button onClick={() => deleteFromFavourite(vet.id)}>
                                                    <Glyphicon glyph="minus"/>
                                                </Button>
                                                :
                                                null
                                            }
                                        </Thumbnail>
                                    </Col>
                                ))
                        )}
                    </Row>
                }
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsFavourites)