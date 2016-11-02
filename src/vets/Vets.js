import React from 'react';
import './Vets.css';
import {Grid, Col, Row, Button, Glyphicon, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux'
import {changeViewToThumbnail, changeViewToList, filterVetsByName} from './actionCreators'
import Thumbnails from './thumbnails/Thumbnails'
import List from './list/List'
import {markVetAsFavourite} from '../app/actionCreators'

const mapStateToProps = (state) => ({
    viewThumbnail: state.vetsData.viewThumbnail,
    matchName: state.vetsData.matchName,
    matchOffice: state.vetsData.matchOffice,
});

const mapDispatchToProps = (dispatch) => ({
    changeViewToThumbnail: () => dispatch(changeViewToThumbnail()),
    changeViewToList: () => dispatch(changeViewToList()),
    filterVetsByName: (matchName) => dispatch(filterVetsByName(matchName)),
});

class Vets extends React.Component {

    render() {
        var {
            changeViewToThumbnail,
            changeViewToList,
            viewThumbnail,
            filterVetsByName,
            filterVetsByOffice,
            matchName,
            matchOffice
        } = this.props;

        return  (
            <div id="vets">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Col xs={12}>
                                <h3 className="views">Wyszukaj weterynarzy:</h3>
                                <FormControl value={matchName}
                                             type="text"
                                             onChange={(event) => filterVetsByName(event.target.value)} />
                            </Col>
                            <Col xs={12}>
                                <h3 className="views">Widok:</h3>
                                <Button
                                    bsSize="large"
                                    onClick={() => changeViewToThumbnail()}>
                                    <Glyphicon glyph="th" />
                                </Button>
                                <Button
                                    bsSize="large"
                                    onClick={() => changeViewToList()}>
                                    <Glyphicon glyph="th-list" />
                                </Button>
                            </Col>
                        </Col>

                    </Row>
                    {viewThumbnail ?  <Thumbnails /> : <List /> }
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vets)


