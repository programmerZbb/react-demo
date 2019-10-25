import React, { Component } from 'react'
import UiCom from "./ui_component"
import Item from "./item"
import store from './redux/store'
import { getDeleteAction, getAddAction, getInputChangeAction } from './redux/actionCreators'

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
    // let list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState((prevState) => {
    //   console.log(prevState === this.state)
    //   return {
    //     list
    //   }
    // })
    const action = getDeleteAction()
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
  render() {
    console.log(this.state.inputValue)
    return (
      <UiCom value={this.state.inputValue} handleChange={this.inputChange.bind(this)} handleClick={this.submit.bind(this)} itemArr={this.itemArr.bind(this)}></UiCom>
    )
  }
}

export default App