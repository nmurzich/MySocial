import React from 'react';
import {addDialogActionCreator, updateDiActionCreator}  from '../../../Redux/dialogPageReducer'
import Dialogs from '../Dialogs/Dialogs'
import {connect} from 'react-redux'
import {WithAuthRedirect} from '../../../HoC/withAuthRedirect'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'



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
// updateDi: (body) => {dispatch(updateDiActionCreator(body))},
addDialog: (dialogsform) => {dispatch(addDialogActionCreator(dialogsform))}
    }

}

let AuthRedirect = WithAuthRedirect(Dialogs)
let withRouterComponent = withRouter(AuthRedirect)

compose (
    connect (makeStateToProps, makeStateToDispatch),
    WithAuthRedirect
)(Dialogs)
export default WithAuthRedirect(connect (makeStateToProps, makeStateToDispatch) (withRouterComponent))

//реализация с собств. изменениями (нужно без let withRouterComponent = withRouter(AuthRedirect))