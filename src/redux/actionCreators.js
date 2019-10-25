import { DELETE_ITEM, ADD_ITEM, INPUT_CHANGE, } from "./actionTypes";

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