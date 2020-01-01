import React from 'react';
import Dialog from './Dialogs.module.css'
import { NavLink, Redirect } from "react-router-dom"

const Dialogs = (props) => {

    let SendersName = props.dialogPage.onames.map(n => <Senders name={n.name} id={n.id} />)

    let MessName = props.dialogPage.messdata.map(m => <Mess dialog={m.dialog} />)

    let addDialog = () => {
        props.addDialog()
    }

    let onChangeDialogs = (e) => {
        let body = e.target.value
        props.updateDi(body)}

    
    // let onChangeDialogs = (e) => {
    //     let body = e.target.value
    //     let action = updateDiActionCreator(body)
    //     props.dispatch(action)
    // }
if (!props.IsAuth) return <Redirect to = "/login"/>
    return (
        <div className='grid'>
            <div>
                {SendersName}
            </div>
            <div>
                {MessName}
            </div>

            <div>
                <textarea onChange={onChangeDialogs} value={props.di}></textarea>
                <button onClick={addDialog}>Add text</button>
            </div>
        </div>)
}


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