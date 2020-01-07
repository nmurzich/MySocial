import React from 'react';
import Dialog from './Dialogs.module.css'
import { NavLink, Redirect } from "react-router-dom"
import  DialogsForm from '../Dialogs/DialogsForm'
import { Field, reduxForm } from 'redux-form'



const Dialogs = (props) => {

    let SendersName = props.dialogPage.onames.map(n => <Senders name={n.name} id={n.id} />)

    let MessName = props.dialogPage.messdata.map(m => <Mess dialog={m.dialog} />)

    // let addDialog = () => {
    //     props.addDialog()
    // }
    let addMessage = (values) => {props.addDialog(values.dialogsform)}

    // let onChangeDialogs = (e) => {
    //     let body = e.target.value
    //     props.updateDi(body)}

    
    // let onChangeDialogs = (e) => {
    //     let body = e.target.value
    //     let action = updateDiActionCreator(body)
    //     props.dispatch(action)
    // }
if (!props.IsAuth) return <Redirect to = "/login"/> 
return (<div>
<div className='grid'>
            <div>
                {SendersName}
            </div>
            <div>
                {MessName}
            </div>
            <div>
            <DialogsFormForRedux onSubmit = {addMessage}/>
               
            </div>
           
        </div>

        </div>
)
    }



const FinalDialogsForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
        <Field component= {'textarea'} name = {'dialogsform'} placeholder ={"Введите ваше сообщение"}
        // onChange={onChangeDialogs} value={props.di} 
        />
        <button>Add text</button>
        </form>
    )
}
const DialogsFormForRedux = reduxForm({form: "dialogs"})(FinalDialogsForm)






const Senders = (props) => {
    let path = "/messages/" + props.id;
    return (

        <div className={Dialog.Sender}>

            <div><NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>)

}

const Mess = (props) => {

    return (
        <div className={Dialog.Mess}>
            <div className={Dialog.Mess}> {props.dialog}</div>


        </div>
    )
}


export default Dialogs