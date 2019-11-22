import React, { Component } from 'react'

// 验证key在渲染中的问题


class Issue extends Component {
    constructor (props) {
        super(props)
        this.handleInputIssue = this.handleInputIssue.bind(this)
    }
    render () {
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>{ item }</div>
                                <input ref={ input => {
                                    this.testInput = input
                                } } onChange={this.handleInputIssue}></input>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    handleInputIssue (e) {
        // console.log(this)
        console.log(this.testInput.value, e.target.value)
    }
}

export default Issue
