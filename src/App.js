import React, { Component, Fragment } from 'react'
import UiCom from "./ui_component"
import Item from "./item"
// import store from './redux/store'
import { getDeleteAction, getAddAction, getInputChangeAction, getTodoList } from './redux/actionCreators'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.initList()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <UiCom value={this.props.inputValue} handleChange={this.props.inputChange.bind(this)} handleClick={this.props.submit.bind(this)} itemArr={this.props.itemArr.bind(this)}></UiCom>
          <ul>
            <li><Link to='/home'>home</Link></li>
            <li><Link to='detail'>detail</Link></li>
          </ul>
          <Route path='/home' exact render={() => (<div>我是首页</div>)}></Route>
          <Route path='/detail' exact render={() => (<div>我是详情</div>)}></Route>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem(index) {
      const action = getDeleteAction(index)
      dispatch(action)
    },
    submit() {
      const action = getAddAction()
      dispatch(action)
    },
    inputChange(e) {
      let value = e.target.value
  
      const action = getInputChangeAction(value)
      dispatch(action)
    },
    initList() {
      const action = getTodoList()
      dispatch(action)
    },
    itemArr() {
      return this.props.list.map((item, index) => {
        return (
          <Item itemData={item} deleteItem={this.props.removeItem} index={index} key={index}/>
        )
      })
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(App)