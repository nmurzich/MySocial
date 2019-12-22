import React from 'react';
import PI from './ProfileInfo.module.css'
import {connect} from 'react-redux'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import PostContainer from '../PostContainer'
import * as axios from 'axios'
import {photoclickAC} from '../../../Redux/profilePageReducer'
import UserProfile from '../ProfileInfo/UserProfile'


class ProfileInfoContainer extends React.Component {
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {this.props.photoclick(response.data)})}


render() {  


    return (<div>
        <UserProfile {...this.props} profile = {this.props.profile}/>

</div>
    )}

}

let MapDispatchtoProps = (state) => ({
    profile: state.profilePage.profile

})

 

export default connect(MapDispatchtoProps, {photoclick: photoclickAC})(ProfileInfoContainer)

