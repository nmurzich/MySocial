import {combineReducers, createStore} from 'redux'
import profilePageReducer from './profilePageReducer'
import dialogPageReducer from './dialogPageReducer'
import sidebarFriendsReducer from './sidebarFriendsReducer'


let reducers = combineReducers(
    {profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    friendsPage: sidebarFriendsReducer
   })

let store = createStore(reducers)



export default store 