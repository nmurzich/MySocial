import React from 'react';
import PI from './ProfileInfo.module.css'
import {connect} from 'react-redux'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import PostContainer from '../PostContainer'
import * as axios from 'axios'
import {photoclickAC} from '../../../Redux/profilePageReducer'
import UserProfile from '../ProfileInfo/UserProfile'
import {withRouter} from 'react-router-dom'
import {getProfileInfoContainer} from '../../../api/api'
import {usersAPI} from '../../../api/api'

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {userId=2}

    usersAPI.getProfileInfoContainer(userId)
    // getProfileInfoContainer(userId) не работает с userId (файл api)
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {withCredentials: true})
        .then(data => {this.props.photoclick(data.data)})}
    


render() {  


    return (<div>
        <UserProfile {...this.props} profile = {this.props.profile} aboutMe = {this.props.aboutMe} contacts = {this.props.contacts} 
        lookingForAJob = {this.props.lookingForAJob} lookingForAJobDescription = {this.props.lookingForAJobDescription}
        fullName = {this.props.fullName}/>

</div>
    )}

}

let MapDispatchtoProps = (state) => ({
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
    contacts: state.profilePage.contacts,
    lookingForAJob: state.profilePage.lookingForAJob,
    lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
    fullName: state.profilePage.fullName
})

 

export default connect(MapDispatchtoProps, {photoclick: photoclickAC})(withRouter(ProfileInfoContainer))

