import React, { Component } from 'react'
import randomColor from 'randomcolor'
import GridItem from './AdoptablesGridItem/AdoptablesGridItem'

class AdoptablesGrid extends Component {
    state = {
        color: randomColor({ hue: 'green', luminosity: 'light' })
    }

    render() {
        return !this.props.adoptables ? <div></div> : this.props.adoptables.map(item => {
            return (
                <GridItem
                    key={item.name}
                    name={item.name}
                    fetchingAdoption={this.props.fetchingAdoption}
                    adoption={item.adoption ? item.adoption.adoption : 0}
                    teamAdoption={item.adoption ? item.adoption.teamAdoption : 0}
                />
            )
        })
    }
}

export default AdoptablesGrid