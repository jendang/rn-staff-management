import { combineReducers } from 'redux'
import auth from './authReducer'
import employee from './EmployeeFormReducer'

export default combineReducers({
    auth,
    employee
})