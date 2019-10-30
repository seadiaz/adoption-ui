import React, { Component } from 'react'
import Tool from "./Tool/Tool"

class Tools extends Component {
    shouldComponentUpdate(nextProps) {
        // return !this.props.tools || this.props.tools.length !== nextProps.tools.length
        return true
    }

    render() {
        return !this.props.tools ? <div></div> : this.props.tools.map(item => {
            return (
                <Tool
                    name={item.name}
                    key={item.id}
                    clicked={() => this.props.onSelectTool(item)}
                    selected={!!this.props.selectedTool && this.props.selectedTool.id === item.id}
                />
            )
        })
    }
}

export default Tools;