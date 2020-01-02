import React from 'react';
import PreloaderMe from '../../Sidebar/Dialogs/PreloaderMe'
import { NavLink } from "react-router-dom"
import PI from './ProfileInfo.module.css'
import UserProfile from '../ProfileInfo/UserProfile'
import ProfileInfoContainer from '../ProfileInfo/ProfileInfoContainer'
import ProfileStatus from '../../Header/1234'
import PostContainer from '../PostContainer'

const ProfileInfo = (props) => {
    if (!props.profile) {return <PreloaderMe/>}

    return (
        
        <div>
        <div className = "content"> 
                       <img src = 'https://storge.pic2.me/upload/704/585847e883b48.jpg'/>


        {/* <NavLink to = '/profile + {u.id}'> */}
            <img src = {props.profile.photos.large}/>
            <div>Про меня {props.profile.aboutMe}</div>
            <div>Контакты {props.profile.contacts.facebook} {props.profile.contacts.website} {props.profile.contacts.twitter}
            {props.profile.contacts.instagram} {props.profile.contacts.youtube} {props.profile.contacts.github}
            {props.profile.contacts.mainLink}
            </div>
            <div>Работа {props.profile.lookingForAJob ? 'Working now!' : 'Голодный до работы'}</div>
            <div>{props.profile.lookingForAJobDescription} </div>
            <div>{props.profile.fullName}</div>
            {/* </NavLink> */}

            <div> <ProfileStatus status = {'Hi Im fine!'}/></div> 

                {/* <div><PostContainer
                // store={props.store}
                // messages={props.messages} onames={props.onames} 
                //       newText= {props.newText}

                //       dispatch={props.dispatch}
                            //  addPost={props.addPost} 
                            // updateNewText={props.updateNewText}
                />
            {/* <UserProfile profile = {props.profile}/> */}
        {/* <NavLink to = '/profile + {u.id}'>
            <img src = {props.profile.photos.large}/>
            </NavLink> */}
       {/* </div> */}
                {/* */} 
                </div>
                
        </div>)
           
}




        export default ProfileInfo