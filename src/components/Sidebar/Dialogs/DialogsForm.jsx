import { Field, reduxForm } from 'redux-form'
import React from 'react'
// import {textareastyle} from "../Dialogs/DialogsFormmodule"

const DialogsForm = (props) => {
    return (
        <form>
            <Field component= {"input"} placeholder ={"Введите ваше сообщение"} />
            <Field component= {"input"} placeholder ={"Введите ваше сообщение"} />
            <Field component= {"input"} placeholder ={"Введите ваше сообщение"} />
        <button>Add message</button>

</form>

    )
}

const DialogsFormForRedux = reduxForm({form: "dialogs"})(DialogsForm)

const FinalDialogsForm = (props) => {
    return ( <div>
        <h1>DialogsForm</h1>
        <DialogsFormForRedux/>
        </div>
    )
}
export default FinalDialogsForm
