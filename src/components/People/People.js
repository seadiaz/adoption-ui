import React, { PureComponent, Fragment } from 'react'

class People extends PureComponent {
    render() {
        const list = !this.props.list ? null : this.props.list.map((item) => {
            return (
                <tr className="stripe-dark" key={item.email}>
                    <td className="pa3">{item.name}</td>
                    <td className="pa3">{item.email}</td>
                </tr>
            )
        })
        return (
            <Fragment>
                <div className="ph4">
                    <div className="overflow-auto">
                        <h3 className="f2 w-100 mw8 center mb1">Adopters</h3>
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

export default People