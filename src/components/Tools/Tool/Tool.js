import React, { Component } from 'react'

class Tool extends Component {
    state = {
        colors: ["light-red", "light-purple", "gold", "blue", "green", "light-pink", "orange", "light-yellow", "yellow"]
    }

    render() {
        const classes = ['pa2', 'fl', 'w-100', 'tc', 'mb1']
        const index = Math.floor(Math.random() * this.state.colors.length)
        classes.push('bg-' + this.state.colors[index])
        return (
            <div className={classes.join(' ')} onClick={this.props.clicked}>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Tool