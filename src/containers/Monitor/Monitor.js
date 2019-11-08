import React, { Component } from "react"
import ToolsGrid from "../../components/ToolsGrid/ToolsGrid"
import { connect } from 'react-redux'
import { fetchTools } from '../../store/actions/tools'

class Monitor extends Component {
    state = {

    }

    componentDidMount() {
        this.props.fetchTools()
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
