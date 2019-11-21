import React, { Component, createRef } from "react"
import { connect } from 'react-redux'
import { updateConfig } from '../../store/actions/config'

class Monitor extends Component {
    constructor() {
        super()
        this.apiUrlFieldRef = createRef()
        this.apiKeyFieldRef = createRef()
    }

    onChangeHandler = () => {
        const url = this.apiUrlFieldRef.current.value
        const key = this.apiKeyFieldRef.current.value
        this.props.updateConfig(url, key)
    }

    render() {
        return (
            <div className="fl w-100 bg-light-green h-100 overflow-y-auto pa4">
                <div className="fl w-100">
                    <h1>Configiuration</h1>
                </div>
                <div className="fl w-100 mb2">
                    <div className="fl w4">
                        API URL:
                    </div>
                    <div className="fl w-50">
                        <input
                            ref={this.apiUrlFieldRef}
                            className="w-100 br2"
                            type="text"
                            value={this.props.apiUrl}
                            onChange={this.onChangeHandler} />
                    </div>

                </div>
                <div className="fl w-100 mb2">
                    <div className="fl w4">
                        API Key:
                    </div>
                    <div className="fl w-50">
                        <input
                            ref={this.apiKeyFieldRef}
                            className="w-100 br2"
                            type="text"
                            value={this.props.apiKey}
                            onChange={this.onChangeHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiUrl: state.config.apiUrl,
        apiKey: state.config.apiKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateConfig: (url, key) => dispatch(updateConfig(url, key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor)
