import React from 'react'


let initialState = {
    users: [
        // { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: Belarus, city: Minsk }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "2", name: 'Tanya', status: "Yoyoyoy",follow: "false", region: { country: Russia, city: Moscow }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        // { id: "3", name: 'Kolya', status: "Liiii",follow: "true", region: { country: Belarus, city: Gomel }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" }
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        }

        default: return state
    }
}


    export const followedAC = (userId) => ({ type: "FOLLOW", userId })
    export const unfollowedAC = (userId) => ({ type: "UNFOLLOW", userId })
    export const setUsersAC = (users) => ({ type: "SET_USERS", users })

    export default usersPageReducer