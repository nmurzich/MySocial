import {AuthReducerThunk} from '../components/Header/AuthReducer'

let InitialState = {
    initializing: false
}

export const appReducer = (state = InitialState, action) => {

    switch(action.type) {

case 'INITIALIZATION': return {
    ...state,
    initializing: true
}
    default: return state
}
}

export const InitializationAC = () => ({type: "INITIALIZATION"})

export const InitializationThuhk = () => (dispatch) => {
    let promise = dispatch(AuthReducerThunk()) 
    Promise.all([promise])
    .then(() => {dispatch(InitializationAC())})

}  

export default appReducer