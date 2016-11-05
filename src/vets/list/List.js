import React from 'react';
import '../Vets.css';
import {Grid, Col, Row, Media, Glyphicon} from 'react-bootstrap';
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

        function fullName(firstName, lastName) {
            return (firstName + ' ' + lastName).toLowerCase();
        }

        function reversedFullName(firstName, lastName) {
            return (lastName + ' ' + firstName).toLowerCase();
        }

        let vetsCheck = vets.filter(function (vet) {
            return fullName(vet.firstName, vet.lastName).indexOf(matchName.toLowerCase()) !== -1
                || reversedFullName(vet.firstName, vet.lastName).indexOf(matchName.toLowerCase()) !== -1
        })

        console.debug(vetsCheck)

        return (


        <Grid>
            <Row className="flexbox">
                {fetchingVets ? "Ładuję weterynarzy..." : null}
                {vetsCheck.length === 0 ?
                    <p key={vetsCheck}>Nie znaleziono weterynarza</p> : vetsCheck.map((vet, index) => (
                    <Col xs={12} key={vet.id}>
                        <Media className="vets-list">
                            <Media.Left>
                                <img width={100} src={vet.photo} alt={vet.lastName}/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>
                                    <Link to={`/vets/` + parseInt(index + 1, 10) }>
                                        <h3>{vet.firstName} {vet.lastName}</h3>
                                    </Link>
                                </Media.Heading>
                                <p><Glyphicon glyph="phone-alt"/> {vet.phone}</p>
                            </Media.Body>
                        </Media>
                    </Col>
                ))}
            </Row>
        </Grid>

        )
    }
}

export default connect(mapStateToProps)(List)
