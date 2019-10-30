import React, { Component, Fragment } from 'react'
import Adopters from './Adopters/Adopters'
import Absentees from './Absentees/Absentees'

class Adoption extends Component {
    render() {
        return (
            <Fragment>
                <div className="f-subheadline lh-title tc">Adoption level: <b>{this.props.adoption}%</b></div>
                <div className="fl w-100 w-50-ns">
                    <Adopters
                        adopters={this.props.adopters}
                    />
                </div>
                <div className="fl w-100 w-50-ns">
                    <Absentees
                        absentees={this.props.absentees}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Adoption;