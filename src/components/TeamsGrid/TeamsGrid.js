import React, { PureComponent } from 'react'
import GridItem from '../GridItem/GridItem'

class TeamsGrid extends PureComponent {
    render() {
        const list = !this.props.items ? <div></div> : this.props.items.map(item => {
            return (
                <GridItem
                    key={item.name}
                    level={item.level}>
                    <div className="fl w-80">{item.name}</div>
                    <div className="fl w-20">{item.level} %</div>
                </GridItem>
            )
        })
        return (
            <div
                className="fl w-100 pa2">
                {list}
            </div>
        )
    }
}

export default TeamsGrid