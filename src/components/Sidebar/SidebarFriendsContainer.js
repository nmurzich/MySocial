import React from 'react';
import { NavLink } from "react-router-dom"
import {addFriendMessageActionCreator, myFriendMessageActionCreator} from '../../Redux/sidebarFriendsReducer'
import SidebarFriends from './SidebarFriends'
import {connect} from 'react-redux'


// const SidebarFriendsContainer = () => {
   
//   return <myContext.Consumer> 
//           {store => {
                 
//     let addFriendMessage = () => {
//     store.dispatch(addFriendMessageActionCreator())
//   }
//   let myFriendMess = (mess) => {
//         store.dispatch(myFriendMessageActionCreator(mess))
//   }
//   return <SidebarFriends
//     addFriendMessage = {addFriendMessage}
//     myFriendMess = {myFriendMess}
//     friends = {store.getRedux().friendsPage.friends}
//     myfriendPost = {store.getRedux().friendsPage.myfriendPost}
//     />}
// } 
// </myContext.Consumer>
//   }

  let makeToProps = (state) => {
    return {
    friends: state.friendsPage.friends,
    myfriendPost: state.friendsPage.myfriendPost}

  }
  let makeToDispatch = (dispatch) => {
    return {
    addFriendMessage: () => {dispatch(addFriendMessageActionCreator())},
    myFriendMess: (mess) => {dispatch(myFriendMessageActionCreator(mess))}
    }

  }
const SidebarFriendsContainer = connect (makeToProps, makeToDispatch)(SidebarFriends)


const MyFriend = (props) => {
  let path = "/friends/" + props.id;
  return (

    <div> <NavLink to={path}>{props.name}</NavLink>
      {props.foto}
      {props.message}
    </div>
  )
}



export default SidebarFriendsContainer 