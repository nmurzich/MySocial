import {connect} from 'react-redux'
import Users from './Users'
import React from 'react'
import {followedAC, unfollowedAC} from '../../../Redux/usersPageReducer'
import {setUsersAC} from '../../../Redux/usersPageReducer'



let MapPropsToState = (state) => {
    return {users: state.usersPage.users}
}

let MapDispatchToState = (dispatch) => {
    return {
    followed: (userId) => {dispatch(followedAC(userId))},
    unfollowed: (userId) => {dispatch(unfollowedAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))}
}}

const UsersContainer = connect (MapPropsToState, MapDispatchToState)(Users)
export default UsersContainer