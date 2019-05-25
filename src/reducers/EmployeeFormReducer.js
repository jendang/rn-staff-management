import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
   
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
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload
        case EMPLOYEE_SAVE_SUCCESS:
            return initialState
        default:
            return state
    }
}