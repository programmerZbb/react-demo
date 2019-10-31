import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const defaultState = {
    list: [],
    inputValue: ""
}

const reducer = (state = defaultState, action) => {
    if(action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }

    if(action.type === 'input_change') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'init_store') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list
        return newState
    }

    if(action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(...[thunk]),
);

const store = createStore(reducer, enhancer)

export default store