import React from 'react';
import vetsWithAdvices from '../data/vetsWithAdvices';
import FilterButton from './filter-button/FilterButton'

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
            isLoading: true,
            filters: {
                every: function () { return true },
                cat: function (advice) { return advice.tag === 'kot' },
                dog: function (advice) { return advice.tag === 'pies' },
                degu: function (advice) { return advice.tag === 'koszatniczka' },
                snake: function (advice) { return advice.tag === 'waz' },
                spider: function (advice) { return advice.tag === 'tarantula' },
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
            isLoading: false,
            filters: {
                every: function () { return true },
                cat: function (advice) { return advice.tag === 'kot' },
                dog: function (advice) { return advice.tag === 'pies' },
                degu: function (advice) { return advice.tag === 'koszatniczka' },
                snake: function (advice) { return advice.tag === 'waz' },
                spider: function (advice) { return advice.tag === 'tarantula' },
                hamster: function (advice) { return advice.tag === 'chomik' },
            },
            activeFilter: 'every'
        });
    }

    _handleFilterClick(filterName) {
        console.log(filterName)
        this.setState({
            activeFilter: filterName,
            filters: this.state.filters,
            isLoading: this.state.isLoading,
            vet: this.state.vet
        });
    }

    render() {
        var isLoading = this.state.isLoading,
            allFilters = this.state.filters,
            activeFilterName = this.state.activeFilter,
            selectedFilter = allFilters[activeFilterName],
            hasAdvices = this.state.vet.advices.length == 0;

        return (
            <div className="Weterynarz">
                {isLoading ? 'Ładuję wybranego weterynarza...' : null}
                <h1>Weterynarz</h1>
                <p>{this.state.vet.firstName} {this.state.vet.lastName}</p>
                <p><img src={this.state.vet.photo} alt={this.state.vet.lastName} /></p>
                <p>Przychodnia: {this.state.vet.office}</p>
                <p>E-mail: {this.state.vet.email}</p>
                <p>Telefon: +{this.state.vet.phone}</p>

                <p>Liczba porad: {this.state.vet.advices.length}</p>
                {hasAdvices ? null :
                    <p>
                        {filterButton(this._handleClickEvery, 'every', activeFilterName, 'Wszystkie')}
                        {filterButton(this._handleCat, 'cat', activeFilterName, 'Koty')}
                        {filterButton(this._handleDog, 'dog', activeFilterName, 'Psy')}
                    </p>
                }
                <p>{this.state.vet.advices
                    .filter(selectedFilter)
                    .map(function(advice) {
                    return (
                        <div>
                            <p>Tag: {advice.tag}</p>
                            <p>{advice.advice}</p>
                        </div>
                    )
                })}</p>


            </div>
        );
    }
}



