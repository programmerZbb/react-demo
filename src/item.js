import React, { Component } from "react"

class Item extends Component {
    constructor(props) {
        super(props)
        // this.handleDelete = this.handleDelete.bind(this)
        this.state = {}
    }

    // shouldComponentUpdate () {
    //     // return false
    // }

    componentWillReceiveProps() {
        console.log("receive")
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log("children render")
        return (
            <div onClick={() => {this.handleDelete()}}>{this.props.itemData}</div>
        )
    }

    handleDelete() {
        this.props.deleteItem(this.props.index)
    }
}

export default Item