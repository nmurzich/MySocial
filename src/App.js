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
import Redux from './Redux/store'
import store from './Redux/store'
import DialogsContainer from './/components/Sidebar/Dialogs/DialogsContainer'






const App = (props) => {

  
  return (

    
    <div className="grid">
         <Header/>
         <Sidebar/>
         <SidebarFriends friends = {store._Redux.friendsPage.friends} dispatch = {props.dispatch}/>
         <FriendsOnline fof={store._Redux.friendsPage.fof}/>

     

        <div className = "grid_content">
        <Route exact path = '/Messages'render = {() => <DialogsContainer dispatch = {props.dispatch} 
       store={props.store} messdata={store._Redux.dialogPage.messdata} onames={store._Redux.profilePage.onames} 
        di={store._Redux.dialogPage.di}
        />}/>
        <Route path = '/Profile' render = {() => <Content 
     onames={store._Redux.profilePage.onames} messages = {store._Redux.profilePage.messages} 
       newText= {store._Redux.profilePage.newText}
      
        
        dispatch = {props.dispatch}
    
        />}/>
        <Route path = '/music' render = {() => <Music/>}/>
        <Route path = '/settings'render = {()=> <Settings/>}/>
        <Route path = '/news' render = {()=><News/>}/>
        

        
        
       

        </div>
        
        
            
      
  </div>
  
         )
}

export default App