import React, { Component, Fragment } from "react"
import Item from "./item"

class App extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      value: "",
      list: []
    }
  }
  submit() {
    let [...list] = this.state.list
    list.push(this.state.value)
    this.setState({
      list,
      value: ""
    })
  }
  inputChange(e) {
    // let value = e.target.value
    let value = this.input.value
    this.setState(() => ({
      value
    }), () => {
      console.log(this.state.value, 2)
    })
    console.log(this.state.value, 1)
  }
  removeItem(index) {
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState((prevState) => {
      console.log(prevState === this.state)
      return {
        list
      }
    })
  }
  itemArr() {
    return this.state.list.map((item, index) => {
      return (
        <Item itemData={item} deleteItem={this.removeItem} index={index} key={index}/>
      )
    })
  }
  render() {
    return (
      <Fragment>
        <input type="text" 
          value={this.state.value} 
          onChange={this.inputChange.bind(this)}
          ref={(input) => {
            this.input = input
          }}
        /> 
          <button onClick={this.submit.bind(this)}>提交</button>
        <ul>
          {
            this.itemArr()
          }
        </ul>
      </Fragment>
    )
  }
}

export default App