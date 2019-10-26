import { createStore } from 'redux'

const defaultState = {
    list: [],
    inputValue: ""
}

const reducer = (state = defaultState, action) => {
    if(action === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }

    if(action === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action === 'input_store') {
        
    }
    return state
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store