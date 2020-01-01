import {usersAPI} from '../../api/api'

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
        IsAuth: true
    }

    default: return state
     
}
}

export const authReducerAC = (id, email, login) => ({type: "AUTH-REDUCER-AC", data: {id, email, login}})


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
            dispatch(authReducerAC(id, email, login))}})
        

    }
}        

export default authReducer