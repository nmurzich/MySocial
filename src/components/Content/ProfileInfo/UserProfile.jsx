import React from 'react'
import PostContainer from '../PostContainer'
import PreloaderMe from '../../Sidebar/Dialogs/PreloaderMe'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ProfileInfoContainer from '../ProfileInfo/ProfileInfoContainer'
import ProfileStatus from '../ProfileInfo/ProfileStatus'


const UserProfile = (props) => {
       
           return (
<div>
<ProfileInfo profile={props.profile} aboutMe = {props.aboutMe} contacts={props.contacts} lookingForAJob = {props.lookingForAJob}
lookingForAJobDescription = {props.lookingForAJobDescription} fullName = {props.fullName} 
/>
{/* <div> <ProfileStatus status = {props.status} 
                       updateUserStatusThunk = {props.updateUserStatusThunk} 
                       /></div>  */}
         <PostContainer/>  
            </div>


    )
}

export default UserProfile