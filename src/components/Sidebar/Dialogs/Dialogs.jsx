import React from 'react';
import Dialog from './Dialogs.module.css'
import { NavLink } from "react-router-dom"
import App from './../../../index'
import {addDialogActionCreator, updateDiActionCreator} from '../../../Redux/dialogPageReducer'
import DialogsContainer from './DialogsContainer'


const Dialogs = (props) => {
let Redux = props.dialogPage

    let SendersName = Redux.onames.map(n => <Senders name={n.name} id={n.id} />)

    let MessName = Redux.messdata.map(m => <Mess dialog={m.dialog} />)

    let addDialog = props.addDialog()
    // let addDialog = () => {
        // props.dispatch(addDialogActionCreator())
        // }

    let onChangeDialogs = (e) => {
        let body = e.target.value
        let action = updateDiActionCreator(body)
        props.dispatch(action)
    }

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