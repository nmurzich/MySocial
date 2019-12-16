import React from 'react';
import { NavLink } from "react-router-dom"
import {addFriendMessageActionCreator, myFriendMessageActionCreator} from '../../Redux/sidebarFriendsReducer'

const SidebarFriends = (props) => {
  let FriendsName = props.friends.map(f => <MyFriend id={f.id} name={f.name} foto={f.foto} message={f.message} />);

  let addFriendMessage = () => {
    props.addFriendMessage()
  }

  let myFriendMess = (e) => {
    let mess = e.target.value
    props.myFriendMess(mess)
  }

  

  return (
    <div> <div> {FriendsName} </div>
      <textarea value={props.myfriendPost} onChange={myFriendMess}>
      </textarea>
      <button onClick={addFriendMessage}>Клик</button></div>

  )

}

const MyFriend = (props) => {
  let path = "/friends/" + props.id;
  return (

    <div> <NavLink to={path}>{props.name}</NavLink>
      {props.foto}
      {props.message}
    </div>
  )
}



export default SidebarFriends