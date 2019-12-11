import React, { Component } from 'react'
import { Settings, Monitor, Columns } from 'react-feather'
import { NavLink, withRouter } from 'react-router-dom'

const iconSize = 24
const className = "f6 link dim br3 ph3 pv2 mb2 dib purple"
const activeClassName = "dark-red"

class Menu extends Component {
    render() {
        const monitorMenuItem = this.props.match.path === "/monitor" ? null : (
            <NavLink
                className={className}
                activeClassName={activeClassName}
                to="/monitor">
                <Monitor size={iconSize} />
            </NavLink>
        )
        const navigationMenuItem = this.props.match.path === "/navigation" ? null : (
            <NavLink
                className={className}
                activeClassName={activeClassName}
                to="/navigation">
                <Columns size={iconSize} />
            </NavLink>
        )
        const configurationMenuItem = this.props.match.path === "/config" ? null : (
            <NavLink
                className={className}
                activeClassName={activeClassName}
                to="/config">
                <Settings size={iconSize} />
            </NavLink>
        )
        return (
            <div className="right-0 top-1 fixed z-5">
                <div className="flex flex-column">
                    {configurationMenuItem}
                    {monitorMenuItem}
                    {navigationMenuItem}
                </div>
            </div>
        )
    }
}

export default withRouter(Menu)