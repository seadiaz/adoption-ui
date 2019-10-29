import React, { Component } from "react"
import Tool from "../components/Tools/Tool/Tool"
import "./App.css"
import { connect } from 'react-redux'
import { selectTool } from '../store/actions/adoption'
import Adoption from "../components/Adoption/Adoption"

class App extends Component {
  state = {

  }
  render() {
    const tools = !this.props.tools ? null : this.props.tools.map(item => {
      return (
        <Tool
          name={item.name}
          key={item.id}
          clicked={() => this.props.onSelectTool(item)}
        />
      )
    })

    const adoption = !this.props.selectedTool ? null :
      <Adoption
        toolName={this.props.selectedTool.name}
        adoption={this.props.selectedTool.adoption} />

    return (
      <div className='App'>
        <h1>This is the ROOT component</h1>
        {adoption}
        {tools}
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
    onSelectTool: (item) => dispatch(selectTool(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
