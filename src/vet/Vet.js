import { connect } from 'react-redux'
import './Vet.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);
import React from 'react';
import BigCalendar from 'react-big-calendar';
import {Grid, Row, Col, Panel, Tabs, Tab} from 'react-bootstrap';
import Tab1 from './tab1/Tab1'
import Tab2 from './tab2/Tab2'
import { activateFilter, saveTheDate } from './actionCreators'
import filters from './filters'
import { Button } from 'react-bootstrap'

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
    appointments: state.visitsData.appointments
});

const mapDispatchToProps = (dispatch) => ({
    activateFilter: (filterId) => dispatch(activateFilter(filterId)),
    saveTheDate: (title, vetId, start, end) => dispatch(saveTheDate(title, vetId, start, end)),
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
            appointments, saveTheDate
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
                                                .map (function(visit) {
                                                    return {
                                                        ...visit,
                                                        start: new Date(visit.start),
                                                        end: new Date(visit.end)
                                                    }
                                                })
                                            }
                                            onSelectSlot={(slotInfo) => {
                                                alert(
                                                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                                                    `\nend: ${slotInfo.end.toLocaleString()}`
                                                )
                                                saveTheDate("nowa wizyta", vet.id, slotInfo.start.toLocaleString(), slotInfo.end.toLocaleString())
1                                            }
                                            }
                                        />
                                        }
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


