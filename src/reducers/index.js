import { combineReducers } from 'redux'
import auth from './authReducer'
import employee from './EmployeeFormReducer'
import employees from './employeesReducer'

export default combineReducers({
    auth,
    employee,
    employees
})