
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

export const authReducerAC = (id, email, login) => ({type: "AUTH-REDUCER-AC", data: {id, email, login} })


export default authReducer