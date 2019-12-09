import React, { Component, Fragment } from "react"
import AdoptablesGrid from "../../components/AdoptablesGrid/AdoptablesGrid"
import { connect } from 'react-redux'
import { requestAdoptables } from '../../store/actions/monitor'
import Menu from "../../components/Menu/Menu"

class Monitor extends Component {
    state = {

    }

    componentDidMount() {
        this.props.requestAdoptables()
    }

    render() {
        return (
            <Fragment>
                <Menu />
                <div className="fl w-100 bg-dark-gray h-100 overflow-y-auto">
                    <AdoptablesGrid
                        className="pv4"
                        adoptables={this.props.adoptables}
                        fetchingAdoption={this.props.fetchingAdoption}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        adoptables: state.monitor.adoptables,
        fetchingAdoption: state.monitor.fetchingAdoption
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAdoptables: () => dispatch(requestAdoptables())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor)
