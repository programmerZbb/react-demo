import { createStore } from 'redux'

const defaultState = {}

const reducer = (state = defaultState, action) => {
    return state
}

const store = createStore(reducer)

export default store