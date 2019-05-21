import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
   
} from '../actions/types'

const initialState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_CREATE:
            return initialState
        default:
            return state
    }
}