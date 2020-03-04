import React, { useState, useEffect } from 'react'

export default () => {
  const [count, setCount] = useState(0)
  const [isShow, setShowCom] = useState(true)
  console.log('render')
  useEffect(() => {
    console.log('effect 执行')
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])
  useEffect(() => {
    console.log('componentDidUpdate')
  }, [count])
  return (
    <div>
      { count }
      <button onClick={() => { setCount(x => x+1); setShowCom(x => !x) }}>+1</button>
      <div>
        {
          isShow
          ?
          <Item></Item>
          :
          ""
        }
      </div>
    </div>
  )
}

function Item () {
  const [itemState, setItemSt] = useState(0)
  useEffect(() => {
    return () => {
      console.log('item componentWillUnmount')
    }
  }, [itemState])
  return (
    <div>item 组件</div>
  )
}