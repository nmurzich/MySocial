import {connect} from 'react-redux'
import Users from './Users'
import React from 'react'
import {followAC, unfollowAC} from '../../../Redux/usersPageReducer'
import {setUsersAC} from '../../../Redux/usersPageReducer'



let MapPropsToState = (state) => {
    return {users: state.usersPage.users}
}

let MapDispatchToState = (dispatch) => {
    return {
    follow: (userId) => {dispatch(followAC(userId))},
    unfollow: (userId) => {dispatch(unfollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))}
}}

const UsersContainer = connect (MapPropsToState, MapDispatchToState)(Users)
export default UsersContainer