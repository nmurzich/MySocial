import {usersAPI} from '../../api/api'
import {stopSubmit } from 'redux-form'

let InitialState = 
{id: null, 
email: null,
login: null,
IsAuth: false}

const authReducer = (state = InitialState, action) => {

   switch(action.type) {
    case "AUTH-REDUCER-AC":
    return {...state, 
        ...action.data, 
        // IsAuth: true
    }

    default: return state
     
}
}

export const authReducerAC = (id, email, login, IsAuth) => ({type: "AUTH-REDUCER-AC", data: {id, email, login, IsAuth}})


// export const authReducerThunk = () => (dispatch) => {
    
//     // return (dispatch) => {    
//     // dispatch(authReducerAC(true))
//     usersAPI.getAuthMe()
//     .then(response => {
//         if (response.data.resultCode === 0) {            
//         let {id, email, login} = response.data.data;
//          authReducerAC(id, email, login)}})
//         }
             
export const AuthReducerThunk = () => {
    return (dispatch) => {
        usersAPI.getAuthMe()
                .then(response => {
           if (response.data.resultCode === 0) {            
           let {id, email, login} = response.data.data;
            dispatch(authReducerAC(id, email, login, true))}})
        

    }
}   

export const LoginThunk = (email, password, rememberMe) => (dispatch) => { 
    usersAPI.getLogin(email, password, rememberMe)
    .then(response => {
        if (response.data.resultCode===0) {
            dispatch(AuthReducerThunk())}
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
                 dispatch(stopSubmit ("login", {_error: message}))}

        })
    }

export const LogoutThunk = () => (dispatch) => {
    usersAPI.getLogout()
    .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(authReducerAC(null, null, null, false))}
        
    })}
        
        
        



export default authReducer