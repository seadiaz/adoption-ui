import React, { Component } from 'react'
import { ChevronRight } from 'react-feather'
import randomColor from 'randomcolor'

class Adoptable extends Component {
    state = {
        color: randomColor({ hue: 'green', luminosity: 'light' })
    }

    render() {
        const selectMark = this.props.selected ? <ChevronRight className="relative right-0 fr" /> : null
        return (
            <div
                className='pa2 fl w-100 tc mb1 pointer dim'
                onClick={this.props.clicked}
                style={{ backgroundColor: this.state.color }}
            >
                <h2 className="cf">
                    {selectMark}
                    {this.props.name}
                </h2>
            </div>
        )
    }
}

export default Adoptable