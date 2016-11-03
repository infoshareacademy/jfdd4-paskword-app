import React from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getFavouriteVets} from './actionCreators'
import {Link} from 'react-router';

const mapStateToProps = (state) => ({

    favouriteVetIds: state.favourites.favouriteVetIds,
    fetchingVets: state.vetsData.fetchingVets,
    vetsData: state.vetsData.vets

})


const mapDispatchToProps = (dispatch) => ({
    getFavouriteVets: (favouritesIDs) => dispatch(getFavouriteVets(favouritesIDs))
})


class FavouriteVetsButton extends React.Component {

    render() {

        var {
            favouriteVetIds,
            getFavouriteVets,
            fetchingVets,
            vetsData
        }=this.props;

        return (

            <div>

                <DropdownButton bsStyle="primary"
                                title="Ulubieni weterynarze" id="bg-nested-dropdown">
                    {fetchingVets ? 'brak weterynarzy' : favouriteVetIds.map((favVetId) =>
                        vetsData.filter((vet) => vet.id === favVetId)
                            .map((currentVet, index) => (
                                <Link to={`/vets/${currentVet.id}`}
                                      key={currentVet.id}>
                                    <MenuItem eventKey={index}
                                    >{currentVet.firstName + ' ' + currentVet.lastName}</MenuItem>
                                </Link>
                            ))
                    )
                    }
                </DropdownButton>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteVetsButton)