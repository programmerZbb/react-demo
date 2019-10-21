import { createStore } from "redux"

const defaultState = {
    inputValue: "",
    list: []
}

const reducer = (state = defaultState, action) => {
    return state
}

const store = createStore(reducer)

export default store