import React, { Component, Fragment } from 'react'

class Adopters extends Component {
    render() {
        return (
            <Fragment>
                <div class="pa4">
                    <div class="overflow-auto">
                        <table class="f6 w-100 mw8 center" cellspacing="0">
                            <thead>
                                <tr class="stripe-dark">
                                    <th class="fw6 tl pa3 bg-silver white">Name</th>
                                    <th class="fw6 tl pa3 bg-silver white">Email</th>
                                </tr>
                            </thead>
                            <tbody class="lh-copy">
                                <tr class="stripe-dark">
                                    <td class="pa3">Hassan Johnson</td>
                                    <td class="pa3">hassan@companywithalongdomain.co</td>
                                </tr>
                                <tr class="stripe-dark">
                                    <td class="pa3">Taral Hicks</td>
                                    <td class="pa3">taral@companywithalongdomain.co</td>
                                </tr>
                                <tr class="stripe-dark">
                                    <td class="pa3">Tyrin Turner</td>
                                    <td class="pa3">ty@companywithalongdomain.co</td>
                                </tr>
                                <tr class="stripe-dark">
                                    <td class="pa3">Oliver Grant</td>
                                    <td class="pa3">oliverg@companywithalongdomain.co</td>
                                </tr>
                                <tr class="stripe-dark">
                                    <td class="pa3">Dean Blanc</td>
                                    <td class="pa3">dean@companywithalongdomain.co</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Adopters