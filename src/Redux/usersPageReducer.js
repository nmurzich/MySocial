import React from 'react'
import { usersAPI } from '../api/api'



let initialState = {
    users: [
        // { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: Belarus, city: Minsk }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "2", name: 'Tanya', status: "Yoyoyoy",follow: "false", region: { country: Russia, city: Moscow }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "3", name: 'Kolya', status: "Liiii",follow: "true", region: { country: Belarus, city: Gomel }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" }
    ],
    pageSize: 56,
    totalUsersCount: 2,
    currentPage: 1,
    isFetching: true,
    isFetchingButton: []
    
    
    
    
    // currentPageзапросили с сервака

}


const usersPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) { return { ...u, followed: true } }
                    return u
                })
            }


        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) { return { ...u, followed: false } }
                    return u
                })
            }
        case 'SET_USERS': {
            return { ...state, users: action.users }
        }

        case 'PAGE_SIZE': {
            return {...state, totalUsersCount: action.totalUsersCount }
        }
        case 'CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        } 

        case 'IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }

        case 'IS_DISABLING': {
            return {...state,
                isFetchingButton: action.disableButton
                  ? [...state.isFetchingButton, action.userId]
                  : state.isFetchingButton.filter(id => id !== action.userId)
    }

}
        default: return state
    }
}


    export const followedAC = (userId) => ({ type: "FOLLOW", userId })
    export const unfollowedAC = (userId) => ({ type: "UNFOLLOW", userId })
    export const setUsersAC = (users) => ({ type: "SET_USERS", users })
    export const setPageSizeAC = (totalUsersCount) => ({type: "PAGE_SIZE", totalUsersCount})
    export const setCurrentPageAC = (currentPage) => ({type: "CURRENT_PAGE", currentPage})
    export const FetchingAC = (isFetching) => ({type: "IS_FETCHING", isFetching})
    export const followinInProgressAC = (disableButton, userId) => ({type: "IS_DISABLING", disableButton, userId})
    

export default usersPageReducer

  
    export const UsersUnFollowThunk = (userId) => {
        return(dispatch) => {
        dispatch(followinInProgressAC(true, userId))
        usersAPI.getUnFollow(userId)
        .then(response => {if(response.data.resultCode == 0) {dispatch(unfollowedAC(userId))}
        dispatch(followinInProgressAC(false, userId))})}
        }

export const FollowedThunk = (userId) => {
        return(dispatch) => {
            dispatch(followinInProgressAC(true, userId))
            usersAPI.getFollow(userId)
        .then(response => {if (response.data.resultCode == 0) {dispatch(followedAC(userId))} 
                        dispatch(followinInProgressAC(false, userId))})}}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return(dispatch) => {
        dispatch(FetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
        .then(response=> { 
            dispatch(FetchingAC(false))
            dispatch(setUsersAC(response.data.items))
            dispatch(setCurrentPageAC(currentPage))
        dispatch(setPageSizeAC(response.data.totalCount))})

}
}
                 
                    //     this.props.isFetchingMe(true)
        
                    //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                    // //             axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    // // {withCredentials: true})
                    //                             .then(response=> { 
                    //                                 this.props.isFetchingMe(false)
                    //                                 // используем isFetchingMe - f из MapDispatchToState
                    //                                 this.props.setUsers(response.data.items)
                    //                             this.props.pageSizen(response.data.totalCount) })
export const getPageNumberThunk = (pageNumber, pageSize) => {
    return(dispatch) => {
        dispatch(FetchingAC(true))
        usersAPI.getPageNumber(pageNumber, pageSize)
        .then(response => {
            dispatch(FetchingAC(false))
            dispatch (setUsersAC(response.data.items))})
        }
    }

        
       
        
                    // onNumberClick = (pageNumber) => {this.props.setcurrentPage(pageNumber)  
                    //     this.props.isFetchingMe(true)     
                    //     usersAPI.getPageNumber(pageNumber, this.props.pageSize)
                    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, 
                    //     // {withCredentials: true})
                
                    //         .then(response => {
                    //             this.props.isFetchingMe(false)
                    //             this.props.setUsers(response.data.items);
                    //                     })}