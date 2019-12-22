import React from 'react'
import PostContainer from '../PostContainer'

import PreloaderMe from '../../Sidebar/Dialogs/PreloaderMe'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ProfileInfoContainer from '../ProfileInfo/ProfileInfoContainer'

const UserProfile = (props) => {
  
           return (
<div>
<ProfileInfo profile={props.profile} />
         <PostContainer/>  
            </div>


    )
}

export default UserProfile