import React, { Component } from "react"

class Item extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDelete}>{this.props.itemData}</div>
        )
    }
    handleDelete() {
        this.props.deleteItem(this.props.index)
    }
}

export default Item