import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Dialogs from './components/Sidebar/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom"
import Music from './components/Sidebar/Music/Music'
import Settings from './components/Sidebar/Settings/Settings';
import News from './components/Sidebar/News/News'
import SidebarFriends from './components/Sidebar/SidebarFriends'
import FriendsOnline from './components/Sidebar/FriendsOnline'
import DialogsContainer from './/components/Sidebar/Dialogs/DialogsContainer'
import PostContainer from './components/Content/PostContainer'
import SidebarFriendsContainer from './components/Sidebar/SidebarFriendsContainer'
import FriendsOnlineContainer from './components/Sidebar/FriendsOnlineContainer'
import UsersContainer from './components/Sidebar/Dialogs/UsersContainer'



const App = () => {

  
  return (

    
    <div className="grid">
         <Header/>
         <Sidebar/>
         <SidebarFriendsContainer 
        //  store={props.store}
        //  friends = {store._Redux.friendsPage.friends} dispatch = {props.dispatch}
         />
         <FriendsOnlineContainer/>

     

        <div className = "grid_content">
        <Route exact path = '/Messages'render = {() => <DialogsContainer 
      //  store={store} 
      // dispatch = {props.dispatch} 
      //  messdata={store._Redux.dialogPage.messdata} onames={store._Redux.profilePage.onames} 
      //   di={store._Redux.dialogPage.di}
        />}/>
        <Route path = '/Profile' render = {() => <Content 
        // store={store}

    //  onames={store._Redux.profilePage.onames} messages = {store._Redux.profilePage.messages} 
    //    newText= {store._Redux.profilePage.newText}
      
        
    //     dispatch = {props.dispatch}
    
        />}/>
        <Route path = '/music' render = {() => <Music/>}/>
        <Route path = '/settings'render = {()=> <Settings/>}/>
        <Route path = '/news' render = {()=><News/>}/>
        <Route path = '/users' render = {()=><UsersContainer/>}/>
        

        
        
       

        </div>
        
        
            
      
  </div>
  
         )
}

export default App