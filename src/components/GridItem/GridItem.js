import React, { PureComponent } from 'react'
import randomColor from 'randomcolor'

class GridItem extends PureComponent {
    state = {
        highLevelColor: randomColor({ hue: 'green', luminosity: 'light' }),
        mediumLevelColor: randomColor({ hue: 'yellow', luminosity: 'light' }),
        lowLevelColor: randomColor({ hue: 'red', luminosity: 'light' }),
    }

    getColor = () => {
        if (this.props.level === 0) {
            return this.state.lowLevelColor
        }
        if (this.props.level < 50) {
            return this.state.mediumLevelColor
        }

        return this.state.highLevelColor
    }

    render() {
        return (
            <div
                className="fl w-20 pr2 pb1">
                <div
                    className="fl w-100 mr2 mb2 pa3 br1 shadow-3 mid-gray"
                    style={{ backgroundColor: this.getColor() }}>
                    {this.props.children}
                </div>
            </div >
        )
    }
}

export default GridItem