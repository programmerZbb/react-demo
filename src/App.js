import React, { Component, Fragment } from 'react'
import UiCom from "./ui_component"
import Item from "./item"
import KeyIssue from './components/someissue'
// import store from './redux/store'
import { getDeleteAction, getAddAction, getInputChangeAction, getTodoList } from './redux/actionCreators'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        '111',
        '222'
      ],
      valueList: [
        '',
        ''
      ]
    }
    this.itemInputChange = this.itemInputChange.bind(this)
    this.addItemInput = this.addItemInput.bind(this)
  }

  componentDidMount() {
    this.props.initList()
  }


  // input item 变化
  itemInputChange (index, value) {
    let valueList = [...this.state.valueList]
    valueList[index] = value
    this.setState(() => (
      {
        valueList
      }
    ))
  }
  addItemInput () {
    let list = [...this.state.list]
    let valueList = [...this.state.valueList]
    list.unshift('新增的小明')
    valueList.unshift('')
    this.setState(() => (
      {
        list,
        valueList
      }
    ))
  }

  render() {
    console.log('render')
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
          <br />
          <button onClick={this.addItemInput}>添加</button>
          <KeyIssue list={this.state.list} valueList={this.state.valueList} itemInputChange={this.itemInputChange} />
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