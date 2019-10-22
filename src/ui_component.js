import React, {Fragment} from 'react'

export default (props) => {
    return (
      <Fragment>
        <input type="text" 
            value={props.inputValue} 
            onChange={props.handleChange}
        /> 
            <button onClick={props.handleClick}>提交</button>
        <ul>
            {
              props.itemArr()
            }
        </ul>
      </Fragment>
    )
}