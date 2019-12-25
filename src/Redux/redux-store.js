import {combineReducers, createStore} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogPageReducer from './dialogPageReducer'
import sidebarFriendsReducer from './sidebarFriendsReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from '../components/Header/AuthReducer'

let reducers = combineReducers(
    {profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    friendsPage: sidebarFriendsReducer,
    usersPage: usersPageReducer,
    isFetching: false,
    autorization: authReducer
    
          })

let store = createStore(reducers)



export default store 