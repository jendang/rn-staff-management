import {
    EMPLOYEE_CREATE
} from '../actions/types'

const initialState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case EMPLOYEE_CREATE:
            return {...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
}