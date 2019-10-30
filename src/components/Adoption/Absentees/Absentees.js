import React, { Component, Fragment } from 'react'

class Absentees extends Component {
    render() {
        const list = !this.props.absentees ? null : this.props.absentees.map((item) => {
            return (
                <tr className="stripe-dark" key={item.email}>
                    <td className="pa3">{item.name}</td>
                    <td className="pa3">{item.email}</td>
                </tr>
            )
        })
        return (
            <Fragment>
                <div className="pa4">
                    <div className="overflow-auto">
                        <h3 className="f2 w-100 mw8 center mb1">Absentees</h3>
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                                <tr className="stripe-dark">
                                    <th className="fw6 tl pa3 bg-silver white">Name</th>
                                    <th className="fw6 tl pa3 bg-silver white">Email</th>
                                </tr>
                            </thead>
                            <tbody className="lh-copy">
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Absentees