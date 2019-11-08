import React, { Component } from 'react'
import randomColor from 'randomcolor'

class ToolsGrid extends Component {
    state = {
        color: randomColor({ luminosity: 'light' })
    }

    render() {
        return (
            <div
                className="pa2 pv4 ml1 mt1 fl w-25 tc dim"
                style={{ backgroundColor: this.state.color }}
            >
                <h3
                    className="fl w-100 tc">
                    {this.props.name}
                </h3>
                <div
                    className="fl w-50 tc">
                    Team: 10%
                </div>
                <div
                    className="fl w-50 tc">
                    People: 30%
                </div>
            </div>
        )
    }
}

export default ToolsGrid