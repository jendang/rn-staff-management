import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types'




export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.employeeList({ type: 'reset' }) //avoid "Back" nav
            })

    }
}

//fetching Data from firebase
//snapshot is Obj describe the data
export const employeesFetch = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ 
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

//fetching ONE employee
export const employeeFetch = ({uid}) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .once('value', snapshot => {
                dispatch({ 
                    type: EMPLOYEE_FETCH_SUCCESS,
                    payload: snapshot.val() 
                    //&& snapshot.val().name || "anynomous"
                }) 
            })
    }
}

//save update
export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift }) //.set(update data)
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
                Actions.employeeList({ type: 'reset' })
            })
    }

}

//delete employee

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth()

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset'})
            })

    }

}