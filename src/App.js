import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileInfoContainer from './components/Content/ProfileInfo/ProfileInfoContainer'
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
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './login/login'
import {InitializationThuhk} from './Redux/appReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {Component} from 'react';
import PreloaderMe from './components/Sidebar/Dialogs/PreloaderMe.jsx'


class App extends Component {
  сomponentDidMount() {
  this.props.InitializationThuhk()}

  render() {
    // if (!this.props.initializing) {
    //   return <PreloaderMe/>} 

  return (
    
    <div className="grid">
         <HeaderContainer/>
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
        <Route path = '/Profile/:userId?'        
         render = {() => <ProfileInfoContainer        // store={store}

    //  onames={store._Redux.profilePage.onames} messages = {store._Redux.profilePage.messages} 
    //    newText= {store._Redux.profilePage.newText}
      
        
    //     dispatch = {props.dispatch}
    
        />}/>
        <Route path = '/music' render = {() => <Music/>}/>
        <Route path = '/settings'render = {()=> <Settings/>}/>
        <Route path = '/news' render = {()=><News/>}/>
        <Route path = '/users' render = {()=><UsersContainer/>}/>
        <Route path = '/login' render = {()=><Login/>}/>

        
        
       

        </div>
        
         </div>
  
         )
}
}

export let mapdispatchtoProps = (state) => (
  {initializing: state.app.initializing}
)
export default compose(
withRouter,
connect (mapdispatchtoProps, {InitializationThuhk}))
  (App)