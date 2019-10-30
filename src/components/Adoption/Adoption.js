import React, { Component, Fragment } from 'react'
import Adopters from './Adopters/Adopters'

class Adoption extends Component {
    render() {
        return (
            <Fragment>
                <div className="f-subheadline lh-title tc">Adoption level: <b>{this.props.adoption}%</b></div>
                <Adopters />
            </Fragment>
        )
    }
}

export default Adoption;