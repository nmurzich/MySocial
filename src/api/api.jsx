import * as axios from 'axios'
import React from 'react';

let instance = axios.create(
    {baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: 'true',
    headers:  {"API-KEY": "7d08c86e-266b-427c-8e89-df3dc187da0e"}
}
)

export const usersAPI = {
getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)},
//        .then(response => {return response.data})
//     },
getPageNumber (pageNumber, pageSize) {
    return  instance.get(`users?page=${pageNumber}&count=${pageSize}`)},
//        .then(response => {return response.data})
// },
getAuthMe () {
    return instance.get(`auth/me`)
    // .then(response => {return response.data})
},
// },

getLogin (email,password, rememberMe=false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
},
getLogout () {
    return instance.delete(`auth/login`)
},

getFollow (userId) {
    return instance.post(`follow/${userId}`, {}, )},
    // .then(response => {if(response.data.resultCode == 0) {followed(userId)}})},

getUnFollow (userId) {
        return instance.delete(`follow/${userId}`)
    
                        // .then(response => {if (response.data.resultCode == 1) unfollowed(userId) })
},



getProfileInfoContainer (userId) {
    console.warn('Obsolete method. Please profileAPI object.')
    return instance.get(`profile/` + userId)}
}

export const profileAPI = {

getProfileInfoContainer (userId) {
            return instance.get(`profile/` + userId)},    

getUserStatus(userId) {
    return instance.get(`profile/status/` + userId)
},

updateMyStatus (status) {
    return instance.put(`profile/status`, {status: status})}
}







// }
// }



// export let getProfileInfoContainer = (userId) => {
//     return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
//     .then(response => {return response.data})
// } 


//продумать userId!







