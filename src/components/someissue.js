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
                                <span>{ item }</span>
                                <input value={this.props.valueList[index]} ref={ input => {
                                    this.testInput = input
                                } } onChange={ (e) => { this.handleInputIssue(e, index) }}></input>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    handleInputIssue (e, index) {
        // console.log(this)
        // console.log(this.testInput.value, e.target.value)
        this.props.itemInputChange(index, e.target.value)
    }
}

export default Issue
