import React, { Component } from 'react'
import styles from './Tool.module.css'

class Tool extends Component {
    render() {
        return (
            <div className={styles.Tool} onClick={this.props.clicked}>
                <h2>I am {this.props.name}</h2>
            </div>
        )
    }
}

export default Tool