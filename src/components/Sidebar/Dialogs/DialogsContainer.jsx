import store from '../../../Redux/store'
import React from 'react';
import reducers from '../../../Redux/redux-store'
import dialogPageReducer from '../../../Redux/dialogPageReducer'
import {addDialogActionCreator} from '../../../Redux/dialogPageReducer'
import Dialogs from '../Dialogs/Dialogs'

const DialogsContainer = (props) => {
    let Redux = props.store.getRedux().dialogPage
    let addDialog = () => {
        props.dispatch(addDialogActionCreator())
        }


    return (
        <div>
    <Dialogs addDialog={addDialog} dialogPage={Redux}/></div>
    )
}
export default DialogsContainer