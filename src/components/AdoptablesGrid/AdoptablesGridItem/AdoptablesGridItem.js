import React, { Component } from 'react'
import randomColor from 'randomcolor'

class AdoptablesGrid extends Component {
    state = {
        color: randomColor({ luminosity: 'light' })
    }

    render() {
        const team = this.props.fetchingAdoption ? <div></div> : (
            <div
                className="fl w-50 tc f3 measure">
                Team: {this.props.teamAdoption}%
            </div>
        )
        const people = this.props.fetchingAdoption ? <div></div> : (
            <div
                className="fl w-50 tc f3 measure">
                People: {this.props.adoption}%
            </div>
        )
        return (
            <div
                className="fl w-25 tc dim pa1"
            >
                <div
                    className="fl w-100 pa3"
                    style={{ backgroundColor: this.state.color }}
                >
                    <h1
                        className="fl w-100 tc f2 measure">
                        {this.props.name}
                    </h1>
                    {team}
                    {people}
                </div>
            </div>
        )
    }
}

export default AdoptablesGrid