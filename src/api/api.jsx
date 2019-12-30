import * as axios from 'axios'
import React from 'react';

let instance = axios.create(
    {baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: 'true',
    headers:  {"API-KEY": "7d08c86e-266b-427c-8e89-df3dc187da0e"}
}
)

export const usersAPI = {
// getUsers (currentPage=1, pageSize=10) {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//        .then(response => {return response.data})
//     },
// getPageNumber (pageNumber, pageSize) {
//     return  instance.get(`users?page=${pageNumber}&count=${pageSize}`)
//        .then(response => {return response.data})
// },
getAuthMe () {
    return instance.get(`auth/me`)
    .then(response => {return response.data})
}}
// },
// getProfileInfoContainer (userId) {
//     return instance.get(`profile/` + userId)
//     .then(response => {return response.data})},

// getFollow (userId, followed) {
//     return instance.post(`follow/${userId}`, {}, )
//     .then(response => {if(response.data.resultCode == 0) {followed(userId)}}) 

// },

// getUnFollow (userId, unfollowed) {
    
//     return instance.delete(`follow/${userId}`)
    
//                         .then(response => {if (response.data.resultCode == 1) unfollowed(userId) })

// }
// }



// export let getProfileInfoContainer = (userId) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
//     .then(response => {return response.data})
// } 


//продумать userId!







