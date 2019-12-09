import React, { Component, createRef } from "react"
import { connect } from 'react-redux'
import { updateConfig } from '../../store/actions/config'

class Monitor extends Component {
    constructor() {
        super()
        this.apiUrlFieldRef = createRef()
        this.apiKeyFieldRef = createRef()
        this.labelsFieldRef = createRef()
    }

    onChangeHandler = () => {
        const url = this.apiUrlFieldRef.current.value
        const key = this.apiKeyFieldRef.current.value
        const labels = this.getLabelsFromString(this.labelsFieldRef.current.value)
        this.props.updateConfig(url, key, labels)
    }

    getStringFromLabels = (value) => {
        let output = []
        for (const item of value) {
            output.push(`${item.kind}=${item.value}`)
        }

        return output.join(', ')
    }

    getLabelsFromString = (value) => {
        const regex = /(\w+[\w \-_.]+)=(\w+[\w \-_.]+)/g
        let values, output = []
        do {
            values = regex.exec(value)
            if (values) {
                output.push({ kind: values[1], value: values[2] })
            }
        } while (values)

        return output
    }

    render() {
        return (
            <div className="fl w-100 bg-light-green h-100 overflow-y-auto pa4">

                <div className="fl w-100">
                    <h1>Configiuration</h1>
                </div>
                <div className="w-40">
                    <label htmlFor="apiUrl" className="f6 b db mb2 mt4">API URL</label>
                    <input
                        id="apiUrl"
                        className="input-reset ba b--black-20 pa2 mb db w-100"
                        type="text"
                        ref={this.apiUrlFieldRef}
                        defaultValue={this.props.apiUrl} />
                </div>
                <div className="w-40">
                    <label htmlFor="apiKey" className="f6 b db mb2 mt4">API Key <span className="normal black-60">(optional)</span></label>
                    <input
                        id="apiKey"
                        className="input-reset ba b--black-20 pa2 mb db w-100"
                        type="text"
                        ref={this.apiKeyFieldRef}
                        defaultValue={this.props.apiKey} />
                </div>
                <div className="w-40">
                    <label htmlFor="labels" className="f6 b db mb2 mt4">Labels <span className="normal black-60">(optional)</span></label>
                    <input
                        id="labels"
                        className="input-reset ba b--black-20 pa2 mb db w-100"
                        type="text"
                        ref={this.labelsFieldRef}
                        defaultValue={this.getStringFromLabels(this.props.labels)} />
                    <small id="name-desc" className="f6 black-60 db mb2">Key1=Value1, Key 2=Value 2,...</small>
                </div>
                <div className="w-40">
                    <button
                        className="f6 br3 ph3 pv2 mb2 dib white bg-purple pointer fr mt3"
                        onClick={this.onChangeHandler}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiUrl: state.config.apiUrl,
        apiKey: state.config.apiKey,
        labels: state.config.labels
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateConfig: (url, key, labels) => dispatch(updateConfig(url, key, labels))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitor)
