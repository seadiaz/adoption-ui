import React, { Component } from 'react'
import randomColor from 'randomcolor'
import GridItem from './ToolsGridItem/ToolsGridItem'

class ToolsGrid extends Component {
    state = {
        color: randomColor({ hue: 'green', luminosity: 'light' })
    }

    render() {
        return !this.props.tools ? <div></div> : this.props.tools.map(item => {
            return (

                <GridItem
                    key={item.name}
                    name={item.name}
                />
            )
        })
    }
}

export default ToolsGrid