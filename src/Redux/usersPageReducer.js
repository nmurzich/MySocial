import React from 'react'


let initialState = {
    users: [
        // { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: Belarus, city: Minsk }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "2", name: 'Tanya', status: "Yoyoyoy",follow: "false", region: { country: Russia, city: Moscow }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "3", name: 'Kolya', status: "Liiii",follow: "true", region: { country: Belarus, city: Gomel }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" }
    ],
    pageSize: 56,
    totalUsersCount: 2,
    currentPage: 1
    
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

        default: return state
    }
}


    export const followedAC = (userId) => ({ type: "FOLLOW", userId })
    export const unfollowedAC = (userId) => ({ type: "UNFOLLOW", userId })
    export const setUsersAC = (users) => ({ type: "SET_USERS", users })
    export const setPageSizeAC = (totalUsersCount) => ({type: "PAGE_SIZE", totalUsersCount})
    export const setCurrentPageAC = (currentPage) => ({type: "CURRENT_PAGE", currentPage})

    export default usersPageReducer