import React, { Component } from "react"
import ToolsGrid from "../../components/ToolsGrid/ToolsGrid"
import { connect } from 'react-redux'
import { requestTools } from '../../store/actions/monitor'

class Monitor extends Component {
    state = {

    }

    componentDidMount() {
        this.props.requestTools()
    }

    render() {
        return (
            <div className="fl w-100 bg-dark-gray h-100 overflow-y-auto">
                <ToolsGrid
                    className="pv4"
                    tools={this.props.tools}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tools: state.monitor.tools
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestTools: () => dispatch(requestTools())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor)
