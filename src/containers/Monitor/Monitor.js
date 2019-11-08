import React, { Component, Fragment } from "react"
import Tools from "../../components/Tools/Tools"
import { connect } from 'react-redux'
import { fetchTools } from '../../store/actions'

class Monitor extends Component {
    state = {

    }

    componentDidMount() {
        this.props.fetchTools()
    }

    render() {
        return (
            <Fragment>
                <div className="fl w-100 w-20-ns bg-dark-gray h-100 overflow-y-auto">
                    <Tools
                        className="pv4"
                        tools={this.props.tools}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedTool: state.selectedTool,
        tools: state.tools.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTools: () => dispatch(fetchTools())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor)
