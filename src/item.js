import React, { Component } from "react"
import PropTypes from "prop-types"

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
        console.log("item执行了")
        return (
            <div onClick={() => {this.handleDelete()}}>{this.props.itemData}</div>
        )
    }

    handleDelete() {
        const {deleteItem} = this.props
        deleteItem(this.props.index)
    }
}
Item.propTypes = {
    itemData: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
}
Item.defaultProps = {
    itemData: "测试数据"
}

export default Item