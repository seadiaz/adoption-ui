import React, { PureComponent } from 'react'
import Adoptable from "./Adoptable/Adoptable"

class Adoptables extends PureComponent {
    state = {
        adoptables: []
    }

    handleSelectAdoptable = (item) => {
        if (this.props.onSelectAdoptable) {
            this.props.onSelectAdoptable(item)
        }
    }

    componentDidUpdate() {
        const adoptables = this.props.adoptables.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({
            adoptables: adoptables
        })
    }

    render() {
        return this.state.adoptables.length === 0 ? <div></div> : this.state.adoptables.map(item => {
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