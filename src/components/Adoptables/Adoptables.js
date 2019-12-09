import React, { Component } from 'react'
import Adoptable from "./Adoptable/Adoptable"

class Adoptables extends Component {
    shouldComponentUpdate(nextProps) {
        // return !this.props.adoptables || this.props.adoptables.length !== nextProps.adoptables.length
        return true
    }

    handleSelectAdoptable = (item) => {
        if (this.props.onSelectAdoptable) {
            this.props.onSelectAdoptable(item)
        }
    }

    render() {
        return !this.props.adoptables ? <div></div> : this.props.adoptables.map(item => {
            return (
                <Adoptable
                    name={item.name}
                    key={item.id}
                    clicked={() => this.handleSelectAdoptable(item)}
                    selected={!!this.props.selectedAdoptable && this.props.selectedAdoptable.id === item.id}
                />
            )
        })
    }
}

export default Adoptables;