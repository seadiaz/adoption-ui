import React, { Component, Fragment } from "react"
import Tools from "../components/Tools/Tools"
import { connect } from 'react-redux'
import { selectTool } from '../store/actions/adoption'
import { fetchTools } from '../store/actions'
import Adoption from "../components/Adoption/Adoption"

class App extends Component {
  state = {

  }

  componentDidMount() {
    this.props.fetchTools()
  }

  render() {
    const adoption = !this.props.selectedTool ? null :
      <Adoption
        toolName={this.props.selectedTool.name}
        adoption={this.props.selectedTool.adoption} />

    return (
      <Fragment>
        <div className="fl w-100 w-20-ns bg-dark-gray h-100">
          <Tools
            className="pv4"
            onSelectTool={this.props.onSelectTool}
            tools={this.props.tools}
            selectedTool={this.props.selectedTool}
          />
        </div>
        <div className="fl w-100 w-80-ns bg-light-blue h-100">
          {adoption}
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
    onSelectTool: (item) => dispatch(selectTool(item)),
    fetchTools: () => dispatch(fetchTools())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
