import {connect} from 'react-redux'
import React from 'react'
import {followedAC, unfollowedAC} from '../../../Redux/usersPageReducer'
import { setUsersAC, setPageSizeAC, FetchingAC, setCurrentPageAC, followinInProgressAC } from '../../../Redux/usersPageReducer'
import ClearUsers from './ClearUsers'
import * as axios from 'axios'
import PreloaderMe from './PreloaderMe'
import { usersAPI } from '../../../api/api'


class Users extends React.Component {
    //    
    componentDidMount() {
        this.props.isFetchingMe(true)
        
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    {withCredentials: true})
                                .then(response=> { 
                                    this.props.isFetchingMe(false)
                                    // используем isFetchingMe - f из MapDispatchToState
                                    this.props.setUsers(response.data.items)
                                this.props.pageSizen(response.data.totalCount) })
                                
    }

    
    


    onNumberClick = (pageNumber) => {this.props.setcurrentPage(pageNumber)  
        this.props.isFetchingMe(true)     
        // usersAPI.getPageNumber(pageNumber, this.props.pageSize)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, 
        {withCredentials: true})

            .then(response => {
                this.props.isFetchingMe(false)
                this.props.setUsers(response.data.items);
                        });
                        
    }
    
       render() {
           
           return <>
                     {this.props.isFetching ? < PreloaderMe />: null}
              
           <ClearUsers

           totalUsersCount = {this.props.totalUsersCount}
           pageSize = {this.props.pageSize}
           currentPage = {this.props.currentPage}
           onNumberClick = {this.onNumberClick}
           users = {this.props.users}
           unfollowed = {this.props.unfollowed}
           followed = {this.props.followed} 
           isFetchingButton = {this.props.isFetchingButton}
           disablingNow = {this.props.disablingNow}
           
           />}
         </> 
       }
    }
        // props.setUsers([
        //         { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: 'Belarus', city: 'Minsk' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        //         { id: "2", name: 'Tanya', status: "Yoyoyoy", follow: "false", region: { country: 'Russia', city: 'Moscow' }, photo: "https://mirzhivotnye.ru/wp-content/uploads/2018/08/Suslik-68-768x813.jpg" },
        //         { id: "3", name: 'Kolya', status: "Liiii", follow: "true", region: { country: 'Belarus', city: 'Gomel' }, photo: "https://s1.1zoom.ru/b5050/331/246106-Sepik_2048x1152.jpg" }
        //     ])
        // }
        

let MapPropsToState = (state) => {
    return {
        users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    // disableButton: state.usersPage.isFetchingOnDisableButton,
     isFetchingButton: state.usersPage.isFetchingButton}}

    
// let MapDispatchToState = (dispatch) => {
//     return {
//     followed: (userId) => {dispatch(followedAC(userId))},
//     unfollowed: (userId) => {dispatch(unfollowedAC(userId))},
//     setUsers: (users) => {dispatch(setUsersAC(users))},
//     pageSizen: (totalCount) => {dispatch(setPageSizeAC(totalCount))},
//     setcurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
//     isFetchingMe: (isFetching) => {dispatch(FetchingAC(isFetching))}
//     }


// }

export default connect (MapPropsToState, {
    followed:followedAC,
    unfollowed:unfollowedAC,
    setUsers:setUsersAC,
    pageSizen:setPageSizeAC,
    setcurrentPage:setCurrentPageAC,
    isFetchingMe: FetchingAC,
    disablingNow: followinInProgressAC
})(Users)

// followed:followedAC можно сократить до followed, если совпадают (followed:followed)
