import React, { Component, Fragment } from 'react'
import Switch from "react-switch"
import PeopleGrid from '../PeopleGrid/PeopleGrid'
import TeamsGrid from '../TeamsGrid/TeamsGrid'

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
                    <TeamsGrid
                        items={this.getTeamAdoptionList()} />
                </Fragment>
        )
    }

    getTeamAdoptionList = () => {
        const adopters = this.props.teamAdopters.sort(this.compareTeams).map((item) => {
            return {
                adopted: true,
                name: item.name,
                level: item.level
            }
        })
        const absentees = this.props.teamAbsentees.sort(this.compareTeams).map((item) => {
            return {
                adopted: false,
                name: item.name,
                level: item.level
            }
        })

        return [...adopters, ...absentees]
    }

    compareTeams = (a, b) => {
        if (a.level === b.level) {
            return a.name.localeCompare(b.name)
        }

        return b.level - a.level
    }

    getPeopleVisualization = () => {
        return (
            this.state.visualizationListTypeIsTeam ? null :
                <Fragment>
                    <PeopleGrid
                        items={this.getPeopleAdoptionList()} />
                </Fragment>
        )
    }

    getPeopleAdoptionList = () => {
        const adopters = this.props.adopters.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {
            return {
                adopted: true,
                level: 100,
                name: item.name,
                email: item.email
            }
        })
        const absentees = this.props.absentees.sort((a, b) => a.name.localeCompare(b.name)).map((item) => {
            return {
                adopted: false,
                level: 0,
                name: item.name,
                email: item.email
            }
        })

        return [...adopters, ...absentees]
    }

    render() {
        const teamsVisualization = this.getTeamsVisualization()
        const peopleVisualization = this.getPeopleVisualization()

        return (
            <Fragment>
                <div className="f1 lh-title tc mt4"><b>{this.props.adoptable ? this.props.adoptable.name : null}</b></div>
                <div className="f2 lh-title tc mt4">Adoption level: <b>{this.props.adoption}%</b></div>
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