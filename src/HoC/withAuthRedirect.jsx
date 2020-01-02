import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

export let WithAuthRedirect = (Component) => {
class RedirectComponent extends React.Component {
    render(){
    if (!this.props.IsAuth) return <Redirect to = "/login"/>
    return <Component {...this.props}/>}
    }

let MapDispatchtoAuth = (state) => ({IsAuth: state.autorization.IsAuth})
let HocAuthConnect = connect(MapDispatchtoAuth)(RedirectComponent)
return HocAuthConnect
    
}


//WithAuthRedirect вызывают из разных мест
