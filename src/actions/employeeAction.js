import {
    EMPLOYEE_CREATE
} from './types'

export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_CREATE,
        value: { prop, value }
    }
}