import React from 'react';
import {addDialogActionCreator, updateDiActionCreator}  from '../../../Redux/dialogPageReducer'
import Dialogs from '../Dialogs/Dialogs'
import {connect} from 'react-redux'



// const DialogsContainer = () => {
//     return <myContext.Consumer> 
//         {store => {

//         let addDialog = () => {
//         store.dispatch(addDialogActionCreator())
//     }
    
//     let onChangeDialogs = (body) => {
//         store.dispatch(updateDiActionCreator(body));
//     }
//     return     <Dialogs addDialog={addDialog}  updateDi={onChangeDialogs}
//         />}
// }
//         </myContext.Consumer>
        
    
    
// }


let makeStateToProps = (state) => {
    return {
    dialogPage: state.dialogPage,
    di: state.dialogPage.di,
    IsAuth: state.autorization.IsAuth

}
}

let makeStateToDispatch = (dispatch) => {
    return {
updateDi: (body) => {dispatch(updateDiActionCreator(body))},
addDialog: () => {dispatch(addDialogActionCreator())}
    }

}


const DialogsContainer = connect (makeStateToProps, makeStateToDispatch) (Dialogs)
export default DialogsContainer