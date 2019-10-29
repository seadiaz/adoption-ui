import React, { Component } from 'react'

class Adoption extends Component {
    render() {
        return (
            <p>The adoption level for <b>{this.props.toolName}</b> is: <b>{this.props.adoption}%</b></p>
        )
    }
}

export default Adoption;