import { createStore } from "redux"

const defaultState = {
    inputValue: "",
    list: [],
    index: 0
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'input_change') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }
    if(action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store