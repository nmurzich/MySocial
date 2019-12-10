import React from 'react';
import Sbr from './Sidebar.module.css'
import {NavLink} from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs';
import SidebarFriends from './SidebarFriends'






const Sidebar = (props) => {
   
  
    return (
    <nav className= {Sbr.sidebar}>
 <div className = {`${Sbr.item} ${Sbr.active}`}>
    <NavLink to = "/Profile" activeClassName = {Sbr.active}>Profile</NavLink>
    </div>
 {<li className = {Sbr.item}> 
 <NavLink to ="/Messages">Messages</NavLink></li>}
 <li className = {Sbr.item}>
    <a href = "/News"> News </a></li>
 <li className ={Sbr.item}>
    <a href = "Music">Music</a></li>
 <li className = {`${Sbr.item} ${Sbr.active}`}>
    <a href = "/Settings">Settings</a></li>
    
   
   
    </nav>
    
    )
    }
   

    

    export default Sidebar
