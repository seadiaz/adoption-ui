import React, { Component, Fragment } from "react"
import Tools from "../../components/Tools/Tools"
import { connect } from 'react-redux'
import { fetchTools, selectTool } from '../../store/actions/tools'
import Adoption from "../../components/Adoption/Adoption"

class Navigation extends Component {
    state = {

    }

    componentDidMount() {
        this.props.fetchTools()
    }

    render() {
        const adoption = !this.props.selectedTool ? null :
            <Adoption
                toolName={this.props.selectedTool.name}
                adoption={this.props.adoption.adoption}
                adopters={this.props.adoption.adopters}
                absentees={this.props.adoption.absentees}
                teamAdopters={this.props.adoption.teamAdopters}
                teamAbsentees={this.props.adoption.teamAbsentees}
            />

        return (
            <Fragment>
                <div className="fl w-100 w-20-ns bg-dark-gray h-100 overflow-y-auto">
                    <Tools
                        className="pv4"
                        onSelectTool={this.props.onSelectTool}
                        tools={this.props.tools}
                        selectedTool={this.props.selectedTool}
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
        selectedTool: state.tools.selectedTool,
        tools: state.tools.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectTool: (item) => dispatch(selectTool(item)),
        fetchTools: () => dispatch(fetchTools())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
