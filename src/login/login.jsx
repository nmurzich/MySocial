import React from 'react';
import {LoginThunk} from '../components/Header/AuthReducer'
import {connect} from 'react-redux'
import {Field, reduxForm} from "redux-form"
import {Redirect} from "react-router-dom"
import style from '../components/Header/Header.module.css'

const LoginForm= (props) => {

    return (

        <form onSubmit={props.handleSubmit}>

            <div>

                <Field placeholder={"email"} name={"email"} component={"input"}/>

            </div>

            <div>

                <Field placeholder={"Password"} name={"password"} component={"input"} type = {"password"}/>

            </div>

            <div>

                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me

                <Field component={"input"} name={"captcha"} /> 
            </div>

            <div>
            { props.error && <div className={style.commonError}>

{props.error} </div>}
                <button>Login</button>
                
            </div>

        </form>

    )

}



const LoginFormforRedux =  reduxForm({form: 'login'})(LoginForm)


const LoginFinallForm = (props) => {

    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe);

    }
    if (props.IsAuth) {
        return <Redirect to={"/profile"} />}

    return <div>

        <h1>Login</h1>

        <LoginFormforRedux onSubmit={onSubmit} />

    </div>

}

// let MapStatetoProps = (state) => ({
//     IsAuth: state.autorization.IsAuth
// })

export default connect(null, {LoginThunk})(LoginFinallForm);

