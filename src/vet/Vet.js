import {connect} from 'react-redux'
import './Vet.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);
import React from 'react';
import BigCalendar from 'react-big-calendar';
import {Grid, Row, Col, Panel, Tabs, Tab, Modal, Glyphicon, Button} from 'react-bootstrap';
import Tab1 from './tab1/Tab1'
import Tab2 from './tab2/Tab2'
import {activateFilter, saveTheDate, saveTheDateBegin, saveTheDateEnd} from './actionCreators'
import filters from './filters'


function reformatDate(dateStr) {
    var dArr = dateStr.split(".");  // ex input "01.18.2010"
    return dArr[1] + "." + dArr[0] + "." + dArr[2]; //ex out: "18.01.2010"
}

const mapStateToProps = (state) => ({
    vets: state.vetsData.vets,
    fetchingVets: state.vetsData.fetchingVets,
    offices: state.officesData.offices,
    fetchingOffices: state.officesData.fetchingOffices,
    visits: state.visitsData.visits,
    fetchingVisits: state.visitsData.fetchingVisits,
    availableFilters: state.visitsData.availableFilters,
    activeFilter: {
        name: state.visitsData.activeFilterName,
        predicate: filters[state.visitsData.activeFilterName].predicate
    },
    appointments: state.visitsData.appointments,
    showModal: state.visitsData.showModal,
    startData: state.visitsData.startData,
    endData: state.visitsData.endData
});

const mapDispatchToProps = (dispatch) => ({
    activateFilter: (filterId) => dispatch(activateFilter(filterId)),
    saveTheDate: (title, vetId, start, end) => dispatch(saveTheDate(title, vetId, start, end)),
    saveTheDateBegin: (startData, endData) => dispatch(saveTheDateBegin(startData, endData)),
    saveTheDateEnd: () => dispatch(saveTheDateEnd())
});

class Vet extends React.Component {

    render() {
        var {
            fetchingVets, vets,
            fetchingVisits, visits,
            fetchingOffices, offices,
            availableFilters,
            activeFilter,
            activateFilter,
            appointments, saveTheDate,
            showModal, startData, endData, saveTheDateBegin, saveTheDateEnd,
            favouriteVet
        } = this.props;

        let vet = vets[this.props.params.vetId - 1];

        let vetOffices = offices
            .filter(function (office) {
                return office.vetIds.indexOf(vet.id) !== -1;
            });

        return (
            <Grid>
                <div className="Weterynarz">
                    <Col xs={12} mdOffset={2} md={8}>
                        <Panel className="one-vet-container">
                            <Row>
                                <h1>Weterynarz</h1>

                                {vet !== undefined ?
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                        <Tab eventKey={1} title="Dane kontaktowe">
                                            <Tab1 vet={vet}
                                                  vetOffices={vetOffices}
                                                  fetchingVet={fetchingVets}
                                                  fetchingVetOffices={fetchingOffices}
                                            />
                                        </Tab>
                                        <Tab eventKey={2} title="Porady">
                                            {availableFilters.map(filterName => (
                                                <Button bsStyle="primary"
                                                        key={filterName}
                                                        onClick={() => activateFilter(filterName)}
                                                        className={filterName === activeFilter.name ? 'active' : ''}>
                                                    {filters[filterName].label}
                                                </Button>
                                            ))}

                                            <Tab2 vet={vet}
                                                  fetchingVet={fetchingVets}
                                                  availableFilters={availableFilters}
                                                  activateFilter={activateFilter}
                                                  activeFilter={activeFilter}
                                            />
                                        </Tab>
                                        <Tab eventKey={3} title="Kalendarz wizyt">

                                            {fetchingVisits ? "Ładuję kalendarz..." :
                                                <BigCalendar
                                                    step={60}
                                                    views={['week']}
                                                    timeslots={1}
                                                    defaultView='week'
                                                    selectable={true}
                                                    defaultDate={new Date()}
                                                    events={visits
                                                        .filter(visit => visit.vetId === vet.id)
                                                        .map(function (visit) {
                                                            return {
                                                                ...visit,
                                                                start: new Date(visit.start),
                                                                end: new Date(visit.end)
                                                            }
                                                        })
                                                        .concat(appointments
                                                            .filter(visit => visit.vetId === vet.id)
                                                            .map(function (visit) {
                                                                return {
                                                                    ...visit,
                                                                    start: new Date(visit.start),
                                                                    end: new Date(visit.end)
                                                                }
                                                            })
                                                        )
                                                    }
                                                    onSelectSlot={(slotInfo) => {
                                                        saveTheDateBegin(slotInfo.start.toLocaleString(), slotInfo.end.toLocaleString())
                                                        1
                                                    }
                                                    }
                                                />
                                            }

                                            <Modal show={showModal} bsSize="large" onHide={() => saveTheDateEnd()}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Nowa wizyta</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <h4>Umówić wizytę od {startData} do {endData} ?</h4>
                                                </Modal.Body>
                                                <Modal.Footer>

                                                    <Button onClick={() => {
                                                        saveTheDate("wizyta", vet.id, startData, endData);
                                                        saveTheDateEnd();
                                                    }}>
                                                        <Glyphicon glyph="ok"/>
                                                    </Button>
                                                    <Button onClick={() => saveTheDateEnd()}>
                                                        <Glyphicon glyph="remove"/>
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </Tab>
                                    </Tabs> : "Ładuję..."}
                            </Row>
                        </Panel>
                    </Col>
                </div>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vet)


