import {combineReducers, createStore} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogPageReducer from './dialogPageReducer'
import sidebarFriendsReducer from './sidebarFriendsReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from '../components/Header/AuthReducer'
// import { applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers(
    {profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    friendsPage: sidebarFriendsReducer,
    usersPage: usersPageReducer,
    isFetching: false,
    autorization: authReducer,
   
    
          })

let store = createStore(reducers)

// applyMiddleware(thunkMiddleware)



export default store 