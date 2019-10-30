import React, { Component } from 'react'
import UiCom from "./ui_component"
import Item from "./item"
// import store from './redux/store'
import { getDeleteAction, getAddAction, getInputChangeAction, getTodoList } from './redux/actionCreators'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange.bind(this))
  }
  itemArr() {
    return this.state.list.map((item, index) => {
      return (
        <Item itemData={item} deleteItem={this.removeItem} index={index} key={index}/>
      )
    })
  }
  handleStoreChange() {
    this.setState(() => (store.getState()))
  }
  removeItem(index) {
    const action = getDeleteAction(index)
    store.dispatch(action)
  }
  submit() {
    const action = getAddAction()
    store.dispatch(action)
  }
  inputChange(e) {
    let value = e.target.value

    const action = getInputChangeAction(value)
    store.dispatch(action)
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    console.log(this.state.inputValue)
    return (
      <UiCom value={this.state.inputValue} handleChange={this.inputChange.bind(this)} handleClick={this.submit.bind(this)} itemArr={this.itemArr.bind(this)}></UiCom>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    inputValue: state.inputValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)