import React, { Component, Fragment } from "react"
import Adoptables from "../../components/Adoptables/Adoptables"
import { connect } from 'react-redux'
import { fetchAdoptables, selectAdoptable } from '../../store/actions/adoptables'
import Adoption from "../../components/Adoption/Adoption"
import Menu from "../../components/Menu/Menu"

class Navigation extends Component {
    state = {

    }

    componentDidMount() {
        this.props.fetchAdoptables()
    }

    render() {
        const adoption = !this.props.selectedAdoptable ? null :
            <Adoption
                adoptableName={this.props.selectedAdoptable.name}
                adoption={this.props.adoption.adoption}
                adopters={this.props.adoption.adopters}
                absentees={this.props.adoption.absentees}
                teamAdopters={this.props.adoption.teamAdopters}
                teamAbsentees={this.props.adoption.teamAbsentees}
            />

        return (
            <Fragment>
                <Menu />
                <div className="fl w-100 w-20-ns bg-dark-gray h-100 overflow-y-auto">
                    <Adoptables
                        className="pv4"
                        onSelectAdoptable={this.props.onSelectAdoptable}
                        adoptables={this.props.adoptables}
                        selectedAdoptable={this.props.selectedAdoptable}
                    />
                </div>
                <div className="fl w-100 w-80-ns bg-light-blue h-100 overflow-y-auto">
                    {adoption}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        adoption: state.adoption,
        selectedAdoptable: state.adoptables.selectedAdoptable,
        adoptables: state.adoptables.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectAdoptable: (item) => dispatch(selectAdoptable(item)),
        fetchAdoptables: () => dispatch(fetchAdoptables())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
