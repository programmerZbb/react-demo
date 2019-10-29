import { DELETE_ITEM, ADD_ITEM, INPUT_CHANGE, INIT_STORE } from "./actionTypes";
import axios from 'axios'

export const getDeleteAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getAddAction = (index) => ({
    type: ADD_ITEM
})

export const getInputChangeAction = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const initState = (list) => {
    return {
        type: INIT_STORE,
        list
    }
}

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/test').then(res => {
            const action = initState(res.data)
            dispatch(action)
        }) 
    }
}
