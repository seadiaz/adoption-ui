import React, { PureComponent } from 'react'
import { getBackgroundColorFromPercentage, getColorFromPercentage } from '../../helpers/color'

class GridItem extends PureComponent {
    state = {
    }

    backgroundColor = () => {
        const color = getBackgroundColorFromPercentage(this.props.level)
        return color
    }

    color = () => {
        const color = getColorFromPercentage(this.props.level)
        return color
    }

    render() {
        return (
            <div
                className="fl w-20 pr2 pb1">
                <div
                    className="fl w-100 mr2 mb2 pa3 br1 shadow-3 dark-gray"
                    style={{ backgroundColor: this.backgroundColor(), color: this.color() }}>
                    {this.props.children}
                </div>
            </div >
        )
    }
}

export default GridItem