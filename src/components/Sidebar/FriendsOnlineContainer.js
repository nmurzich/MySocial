import React from 'react';
import {NavLink} from "react-router-dom"
import {connect} from 'react-redux'
import FriendsOnline from './FriendsOnline'

let MapToProps = (state) => {
    return {
    fof: state.friendsPage.fof}

}

const FriendsOnlineContainer = connect (MapToProps, {}) (FriendsOnline)
   

export default FriendsOnlineContainer