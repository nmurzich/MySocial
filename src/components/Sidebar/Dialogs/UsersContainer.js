import {connect} from 'react-redux'
import React from 'react'
import {followedAC, unfollowedAC} from '../../../Redux/usersPageReducer'
import {setUsersAC, setPageSizeAC, setCurrentPageAC} from '../../../Redux/usersPageReducer'
import ClearUsers from './ClearUsers'
import * as axios from 'axios'

class Users extends React.Component {
    //    
    componentDidMount() {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                                .then(response => { 
                                    this.props.setUsers(response.data.items)
                                this.props.pageSizen(response.data.totalCount) })
    }



    onNumberClick = (pageNumber) => {this.props.setcurrentPage(pageNumber)       

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)

            .then(response => {
                this.props.setUsers(response.data.items);
                        });
    }
    
       render() {
           return <ClearUsers

           totalUsersCount = {this.props.totalUsersCount}
           pageSize = {this.props.pageSize}
           currentPage = {this.props.currentPage}
           onNumberClick = {this.onNumberClick}
           users = {this.props.users}
           unfollowed = {this.props.unfollowed}
           followed = {this.props.followed}          
           
           />}
       }

        // props.setUsers([
        //         { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: 'Belarus', city: 'Minsk' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        //         { id: "2", name: 'Tanya', status: "Yoyoyoy", follow: "false", region: { country: 'Russia', city: 'Moscow' }, photo: "https://mirzhivotnye.ru/wp-content/uploads/2018/08/Suslik-68-768x813.jpg" },
        //         { id: "3", name: 'Kolya', status: "Liiii", follow: "true", region: { country: 'Belarus', city: 'Gomel' }, photo: "https://s1.1zoom.ru/b5050/331/246106-Sepik_2048x1152.jpg" }
        //     ])
        // }
        




let MapPropsToState = (state) => {
    return {users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
}
}

let MapDispatchToState = (dispatch) => {
    return {
    followed: (userId) => {dispatch(followedAC(userId))},
    unfollowed: (userId) => {dispatch(unfollowedAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    pageSizen: (totalCount) => {dispatch(setPageSizeAC(totalCount))},
    setcurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))}


}}

const UsersContainer = connect (MapPropsToState, MapDispatchToState)(Users)
export default UsersContainer