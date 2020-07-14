import { combineReducers } from 'redux'
import {
    APP_UI,
    APP_DATA,
    SHOW_PURSECARD,
    DATA_BASE,
} from './actions'

function APP_UI_TREE(state = APP_UI, action) {
    switch (action.type) {
        case SHOW_PURSECARD:
            return  Object.assign({}, state, {
                        SHOW_PURSECARD: action.data
                    })
        default:
            return state
    }
}

function APP_DATA_TREE(state = APP_DATA, action) {
    switch (action.type) {
        case DATA_BASE:
            return  Object.assign({}, state, {
                        DATA_BASE: action.data
                    })
        default:
            return state
    }
}

const todoApp = combineReducers({
    APP_UI_TREE,
    APP_DATA_TREE,
})

export default todoApp