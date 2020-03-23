import React, { Component, Fragment } from "react"
import Item from "./item"
import Test from './component/test'
import Axios from "axios"
import './App.css'
import store from "./redux/store"

class App extends Component {
  constructor(props) {
    super(props)
    this.removeItem = this.removeItem.bind(this)
    this.handleAnima = this.handleAnima.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.state = {
      test: '11111'
    }
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
  inputChange(name, e) {
    // let value = e.target.value
    console.log(name, '-----name')
    let value = this.input.value
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
    this.setState((state) => {
      console.log(this.state === state)
      let test = this.state.test
      return {
        test: test += 'test'
      }
    })
    // this.setState((state) => ({
    //   test: '33333'
    // }))

    // this.setState({
    //   test: '22222'
    // })
    // this.setState({
    //   test: '333333'
    // })

    // this.setState(() => ({
    //   animate: !this.state.animate
    // }))
  }

  render() {
    console.log(this.state.test, '-----测试')
    return (
      <Fragment>
        <div>{this.state.test}</div>
        <input type="text" 
          value={this.state.inputValue} 
          onChange={this.inputChange.bind(this, '1')}
          ref={(input) => {
            this.input = input
          }}
        /> 
          <button onClick={this.submit.bind(this)}>提交</button>
        <button onClick={this.handleAnima}>点击动画</button>
        <div className={'amia'}>11111</div>
        <Test>
          <div>我是测试</div>
        </Test>
      </Fragment>
    )
  }
}

export default App