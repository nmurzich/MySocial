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
import {getProfileThunk} from '../../../Redux/profilePageReducer'
import {Redirect} from 'react-router-dom'
import {WithAuthRedirect} from '../../../HoC/withAuthRedirect'
import {compose} from 'redux'
import getUserStatusThunk from '../../../Redux/profilePageReducer'
import updateUserStatusThunk from '../../../Redux/profilePageReducer'
import {getProfile, getaboutMe, getcontacts, getlookingForAJob, getlookingForAJobDescription, 
    getfullName, getstatus, getavtorizationUserId, getIsAuth} from '../../../selectors.jsx/selectorsForProfileInfo'



class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
            if (!userId) {userId=this.props.avtorizationUserId}
    
    
    // this.props.getUserStatusThunk(userId)
    this.props.getProfileThunk(userId)
  
        
    // let userId = this.props.match.params.userId
    // if (!userId) {userId=2}

    // usersAPI.getProfileInfoContainer(userId)
    // // getProfileInfoContainer(userId) не работает с userId (файл api)
    // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {withCredentials: true})
    //     .then(data => {this.props.photoclick(data.data)})}
    
    }
render() {  
    // if (!this.props.IsAuth) return <Redirect to = "/login"/>
      
    
    
    return (<div>
        <UserProfile {...this.props} profile = {this.props.profile} aboutMe = {this.props.aboutMe} contacts = {this.props.contacts} 
        lookingForAJob = {this.props.lookingForAJob} lookingForAJobDescription = {this.props.lookingForAJobDescription}
        fullName = {this.props.fullName} updateUserStatusThunk = {this.props.updateUserStatusThunk} status = {this.props.status}
       
        />
        
       
        
        />

</div>
    )}
   }

// let MapDispatchtoAuth = (state) => ({IsAuth: state.autorization.IsAuth})
// let HocAuthConnect = connect(MapDispatchtoAuth)(HocAuthConnect)

let MapDispatchtoProps = (state) => ({
    profile: getProfile(state),
    aboutMe: getaboutMe(state),
    contacts: getcontacts(state),
    lookingForAJob: getlookingForAJob(state),
    lookingForAJobDescription: getlookingForAJobDescription(state),
    fullName: getfullName(state),
    status: getstatus(state),
    avtorizationUserId: getavtorizationUserId(state),
    IsAuth: getIsAuth(state)
        
})


export default compose(
       connect(MapDispatchtoProps, {    getProfileThunk, 
    //  updateUserStatusThunk,
    //  getUserStatusThunk,
    }),
    withRouter)
     (ProfileInfoContainer)

// let HocRedirect = WithAuthRedirect(ProfileInfoContainer)

// let WithUrlDataContainerComponent = withRouter(HocRedirect);

// WithAuthRedirect (connect(MapDispatchtoProps, {getProfileThunk, getUserStatusThunk, updateUserStatusThunk})(WithUrlDataContainerComponent))

// export default ProfileInfoContainer

// compose(

//     WithUrlDataContainerComponent,

//     connect(MapDispatchtoProps, {getProfileThunk, getUserStatusThunk, updateUserStatusThunk}),

//     WithAuthRedirect 

// )(ProfileInfoContainer)
    
