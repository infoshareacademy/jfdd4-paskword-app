import React from 'react';
import './Vet.css'
import vetsWithAdvices from '../data/vetsWithAdvices';
import FilterButton from './filter-button/FilterButton';
import officesData from '../data/offices.js';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import Calendar from '../calendar/Calendar'
import Timeslots from '../calendar/timeslots'
import CalendarEvents from '../calendar/events'

function filterButton(handleClick, myFilter, activeFilter, label) {
    return (
        <FilterButton handleClick={handleClick}
                      myFilter={myFilter}
                      activeFilter={activeFilter}>
            {label}
        </FilterButton>
    )
}

export default class Vet extends React.Component {
    constructor() {
        super();
        this.state = {
            vet: [],
            offices: [],
            isLoading: true,
            filters: {
                every: function () { return true },
                cat: function (advice) { return advice.tag === 'kot' },
                dog: function (advice) { return advice.tag === 'pies' },
                degu: function (advice) { return advice.tag === 'koszatniczka' },
                snake: function (advice) { return advice.tag === 'waz' },
                spider: function (advice) { return advice.tag === 'pająk' },
                hamster: function (advice) { return advice.tag === 'chomik' },
            },
            activeFilter: 'every'

        };
        this._handleClickEvery = this._handleFilterClick.bind(this, 'every');
        this._handleCat = this._handleFilterClick.bind(this, 'cat');
        this._handleDog = this._handleFilterClick.bind(this, 'dog');
        this._handleDegu = this._handleFilterClick.bind(this, 'degu');
        this._handleSnake = this._handleFilterClick.bind(this, 'snake');
        this._handleSpider = this._handleFilterClick.bind(this, 'spider');
        this._handleHamster = this._handleFilterClick.bind(this, 'hamster');
    }

    componentWillMount() {
        var context = this;
        context.setState({
            vet: vetsWithAdvices[this.props.params.vetId - 1],
            offices: officesData,
            isLoading: false,
            filters: {
                every: function () { return true },
                cat: function (advice) { return advice.tag === 'kot' },
                dog: function (advice) { return advice.tag === 'pies' },
                degu: function (advice) { return advice.tag === 'koszatniczka' },
                snake: function (advice) { return advice.tag === 'wąż' },
                spider: function (advice) { return advice.tag === 'pająk' },
                hamster: function (advice) { return advice.tag === 'chomik' },
            },
            activeFilter: 'every'
        });
    }

    _handleFilterClick(filterName) {
        this.setState({
            activeFilter: filterName,
            filters: this.state.filters,
            isLoading: this.state.isLoading,
            vet: this.state.vet,
            offices: this.state.offices,
        });
    }

    render() {
        var filterButtons = [
            {
                name: 'every',
                component: filterButton(this._handleClickEvery, 'every', activeFilterName, 'Wszystkie')
            },
            {
                name: 'kot',
                component: filterButton(this._handleCat, 'cat', activeFilterName, 'Koty'),
            },
            {
                name: 'pies',
                component: filterButton(this._handleDog, 'dog', activeFilterName, 'Psy'),
            },
            {
                name: 'koszatniczka',
                component: filterButton(this._handleDegu, 'degu', activeFilterName, 'Koszatniczki'),
            },
            {
                name: 'wąż',
                component: filterButton(this._handleSnake, 'snake', activeFilterName, 'Węże'),
            },
            {
                name: 'pająk',
                component: filterButton(this._handleSpider, 'spider', activeFilterName, 'Pająki'),
            },
            {
                name: 'chomik',
                component: filterButton(this._handleHamster, 'hamster', activeFilterName, 'chomik'),
            }


        ]

        var isLoading = this.state.isLoading,
            allFilters = this.state.filters,
            activeFilterName = this.state.activeFilter,
            selectedFilter = allFilters[activeFilterName],
            hasAdvices = this.state.vet.advices.length == 0,
            vetId = this.state.vet.id,
            actualFilterButtons = [];
        actualFilterButtons.push(filterButtons[0])

        return (
            <div className="Weterynarz">
                {isLoading ? 'Ładuję wybranego weterynarza...' : null}
                <h1>Weterynarz</h1>
                <p>{this.state.vet.firstName} {this.state.vet.lastName}</p>
                <p><img src={this.state.vet.photo} alt={this.state.vet.lastName} /></p>
                <p>Przychodnie: </p>
                    {this.state.offices.length === 0 ?
                        'Ładuję przychodnie...' : null}
                    <ul>
                        {this.state.offices
                            .filter(function (office) {
                                var result = office.vetIds.indexOf(vetId) !== -1;
                                return result
                            })
                            .map(function (item) {
                                return item
                            })
                            .map(function (office) {
                                return (
                                    <Link to={`/offices/` + parseInt(office.id, 10) }>
                                        {office.officeName} <br />
                                    </Link>
                                )
                            })}
                    </ul>

                <p>E-mail: {this.state.vet.email}</p>
                <p>Telefon: +{this.state.vet.phone}</p>

                <p>Liczba porad: {this.state.vet.advices.length}</p>

                {this.state.vet.advices.forEach(function (advice) {
                    filterButtons
                        .filter(function (button) {
                            return button.name == advice.tag
                        })
                        .forEach(function (button) {
                            actualFilterButtons.push(button)
                        })
                    })
                }

                {hasAdvices ? "Brak porad do wyświetlenia" :
                    actualFilterButtons.map(function(button) {
                        return <span>{button.component}</span>
                    })
                }

                {this.state.vet.advices
                    .filter(selectedFilter)
                    .map(function(advice) {
                        return (
                            <div>
                                <Col xs={10} xsOffset={1} sm={8} smOffset={2}  className="advice">
                                    <p>Tag: {advice.tag}</p>
                                    <p>{advice.advice}</p>
                                </Col>
                            </div>
                        )
                    })}

                <Timeslots events={CalendarEvents}/>
            </div>
        )
    }
}



