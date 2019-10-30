import React, { Component } from 'react'
import Tool from "./Tool/Tool"

class Tools extends Component {
    render() {
        const tools = !this.props.tools ? <div></div> : this.props.tools.map(item => {
            return (
                <Tool
                    name={item.name}
                    key={item.id}
                    clicked={() => this.props.onSelectTool(item)}
                />
            )
        })

        return tools
    }
}

export default Tools;