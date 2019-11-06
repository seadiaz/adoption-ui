import React, { PureComponent, Fragment } from 'react'

class Teams extends PureComponent {
    render() {
        return <Fragment>
            <div className="pa4">
                <div className="overflow-auto">
                    <h3 className="f2 w-100 mw8 center mb1">{this.props.title}</h3>
                    <table className="f6 w-100 mw8 center" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-silver white">Name</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">

                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    }
}

export default Teams