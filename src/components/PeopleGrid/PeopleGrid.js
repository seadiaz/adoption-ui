import React, { PureComponent } from 'react'
import GridItem from '../GridItem/GridItem'
import randomColor from 'randomcolor'

class PeopleGrid extends PureComponent {
    state = {
        adoptedColor: randomColor({ hue: 'green', luminosity: 'light' }),
        absenteeColor: randomColor({ hue: 'red', luminosity: 'light' }),
    }

    render() {
        const list = !this.props.items ? <div></div> : this.props.items.map(item => {
            return (
                <GridItem
                    key={item.name}
                    level={item.level}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
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

export default PeopleGrid