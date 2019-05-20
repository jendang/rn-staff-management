import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    PASSWORD_CHANGED,
    EMAIL_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types'



export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

const signInSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    }) 
    // Actions.key ==> from Router
    Actions.main()
}

const signInFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    }) 
}


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => signInSuccess(dispatch,user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => signInSuccess(dispatch,user))
                    .catch(() => signInFail(dispatch))
            })
    }    
} 