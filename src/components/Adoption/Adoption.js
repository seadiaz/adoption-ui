import React, { Component, Fragment } from 'react'
import Teams from '../Teams/Teams'
import People from '../People/People'
import Switch from "react-switch"

class Adoption extends Component {
    state = {
        visualizationListTypeIsTeam: true
    }

    handleChangeVisualizationListType = () => {
        this.setState((prevState) => {
            return { visualizationListTypeIsTeam: !prevState.visualizationListTypeIsTeam }
        })
    }

    getTeamsVisualization = () => {
        return (
            !this.state.visualizationListTypeIsTeam ? null :
                <Fragment>
                    <div className="fl w-100 w-50-ns">
                        <Teams
                            title="Adopters"
                            list={this.props.teamAdopters}
                        />
                    </div>
                    <div className="fl w-100 w-50-ns">
                        <Teams
                            title="Absentees"
                            list={this.props.teamAbsentees}
                        />
                    </div>
                </Fragment>
        )
    }

    getPeopleVisualization = () => {
        return (
            this.state.visualizationListTypeIsTeam ? null :
                <Fragment>
                    <div className="fl w-100 w-50-ns">
                        <People
                            list={this.props.adopters}
                        />
                    </div>
                    <div className="fl w-100 w-50-ns">
                        <People
                            list={this.props.absentees}
                        />
                    </div>
                </Fragment>
        )
    }

    render() {
        const teamsVisualization = this.getTeamsVisualization()
        const peopleVisualization = this.getPeopleVisualization()

        return (
            <Fragment>
                <div className="f-subheadline lh-title tc">Adoption level: <b>{this.props.adoption}%</b></div>
                <div className="fl w-100 ph4 mt4">
                    <div className="dib v-mid">Teams</div>
                    <Switch
                        className="v-mid mh1"
                        onChange={this.handleChangeVisualizationListType}
                        checked={!this.state.visualizationListTypeIsTeam}
                        checkedIcon={false}
                        uncheckedIcon={false}
                    />
                    <div className="dib v-mid">People</div>
                </div>
                {teamsVisualization}
                {peopleVisualization}

            </Fragment>
        )
    }
}

export default Adoption;