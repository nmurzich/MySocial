import Header from '../Header/Header'
import *as axios from 'axios'
import React from 'react';
import {connect} from 'react-redux'
import {authReducerAC} from './AuthReducer'
import { usersAPI } from '../../api/api'
import { AuthReducerThunk, LogoutThunk } from '../Header/AuthReducer'



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.AuthReducerThunk()
        // this.props.authReducerThunk()
                  
            // let {id, email, login} = response.data.data};
           
        
        // usersAPI.getAuthMe()
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        // .then(response => {

        //    if (response.data.resultCode === 0) {            
        //    let {id, email, login} = response.data.data;
        //     this.props.authReducerAC(id, email, login)}})
        
                
    } 
    render() {

return <Header {...this.props}/>

    }
}



let mapStateToProps = (state) => ({
    data: state.autorization.login,
    IsAuth: state.autorization.IsAuth
    })



export default connect (mapStateToProps, 
    {
        authReducerAC,
        AuthReducerThunk,
        LogoutThunk
})
    (HeaderContainer)
