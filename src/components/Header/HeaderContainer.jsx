import Header from '../Header/Header'
import *as axios from 'axios'
import React from 'react';
import {connect} from 'react-redux'
import {authReducerAC} from './AuthReducer'
import { usersAPI } from '../../api/api'


class HeaderContainer extends React.Component {
    componentDidMount() {

        usersAPI.getAuthMe()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(data => {

           if (data.resultCode === 0) {            
           let {id, email, login} = data.data;
            this.props.authReducerAC(id, email, login)}})
        
                
        }
    render() {

return <Header {...this.props}/>

    }
}
let mapStateToProps = (state) => ({
    data: state.autorization.login,
    IsAuth: state.autorization.IsAuth

})

export default connect (mapStateToProps, {authReducerAC})(HeaderContainer)
