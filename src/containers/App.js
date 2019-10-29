import React, { Component } from "react"
import Tool from "../components/Tools/Tool/Tool"
import "./App.css"
import { connect } from 'react-redux'
import { selectTool } from '../store/actions'

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

    return (
      <div className='App'>
        <h1>This is the ROOT component</h1>
        <h2>Selected tool: {this.props.selectedTool}</h2>
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
