import React from 'react';
import './Vets.css';
import {Grid, Col, Row, Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux'
import {changeViewToThumbnail, changeViewToList} from './actionCreators'
import Thumbnails from './thumbnails/Thumbnails'
import List from './list/List'

const mapStateToProps = (state) => ({
    viewThumbnail: state.vetsData.viewThumbnail,
});

const mapDispatchToProps = (dispatch) => ({
    changeViewToThumbnail: () => dispatch(changeViewToThumbnail()),
    changeViewToList: () => dispatch(changeViewToList()),
});

class Vets extends React.Component {

    render() {
        var {
            changeViewToThumbnail,
            changeViewToList,
            viewThumbnail,
        } = this.props;

        return  (
            <div id="vets">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h3 id="views">Widok:</h3>
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

                            {viewThumbnail ?  <Thumbnails /> : <List /> }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vets)


