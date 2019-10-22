import React, { Component } from "react"
import Item from "./item"
import Axios from "axios"
import './App.css'
import store from "./redux/store"
import UiCom from "./ui_component"

class App extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
    this.handleAnima = this.handleAnima.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
    this.itemArr = this.itemArr.bind(this)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  submit() {
    // let [...list] = this.state.list
    // list.push(this.state.value)
    // this.setState({
    //   list,
    //   value: ""
    // })

    const action = {
      type: "add_item",
    }
    store.dispatch(action)
  }
  inputChange(e) {
    let value = e.target.value
    // let value = this.input.value
    // this.setState(() => ({
    //   value
    // }), () => {
    //   console.log(this.state.value, 2)
    // })
    // console.log(this.state.value, 1)

    const action = {
      type: "input_change",
      value
    }
    store.dispatch(action)
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
    const action = {
      type: "delete_item",
      index
    }
    store.dispatch(action)
  }
  itemArr() {
    return this.state.list.map((item, index) => {
      return (
        <Item itemData={item} deleteItem={this.removeItem} index={index} key={index}/>
      )
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    Axios.get("/api/test")
    .then(res => {
      console.log(res)
      this.setState(() => (
        {
          list: [...res.data]
        }
      ))
    })
    .catch(err => {
      console.log(err, "在这")
    })
  }
  
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  // eslint-disable-next-line no-dupe-class-members
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  
  componentDidUpdate() {
    console.log('componentDidupdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleAnima() {
    console.log('执行了')
    // this.setState(() => ({
    //   animate: !this.state.animate
    // }))
  }

  render() {
    console.log("father render")
    return (
      <UiCom value={this.state.inputValue} handleChange={this.inputChange.bind(this)} handleClick={this.submit.bind(this)} itemArr={this.itemArr}></UiCom>
    )
  }
}

export default App