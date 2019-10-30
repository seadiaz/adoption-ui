import React, { Component } from 'react'
import { ChevronRight } from 'react-feather';

class Tool extends Component {
    state = {
        colors: ["light-red", "light-purple", "gold", "blue", "green", "light-pink", "orange", "light-yellow", "yellow"],
        pickedColor: null
    }

    componentDidMount() {
        const index = Math.floor(Math.random() * this.state.colors.length)
        this.setState({
            ...this.state,
            pickedColor: this.state.colors[index]
        })
    }

    render() {
        const classes = ['pa2', 'fl', 'w-100', 'tc', 'mb1', 'pointer', 'dim']
        classes.push('bg-' + this.state.pickedColor)
        const selectMark = this.props.selected ? <ChevronRight className="relative right-0 fr" /> : null
        return (
            <div className={classes.join(' ')} onClick={this.props.clicked}>
                <h2 className="cf">
                    {selectMark}
                    {this.props.name}
                </h2>
            </div>
        )
    }
}

export default Tool