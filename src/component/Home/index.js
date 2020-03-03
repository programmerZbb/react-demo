import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            myDOM: null
        }
        this.ele = document.createElement('div')
    }

    componentDidMount () {
        this.getPortal()
    }

    componentWillUnmount () {
    }

    getPortal () {
        this.setState(() => ({
            myDOM: ReactDOM.createPortal(this.props.children, document.getElementsByClassName('home-box')[0])
        }))
    }

    render () {
        console.log(this.props)
        return (
            <div className='home-box'>
                父组件
                <div>把插槽安排到下面吧</div>
                {
                    this.state.myDOM
                }
            </div>
        )
    }
}

export default Home
