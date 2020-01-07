let InitialState = {
  messdata: [
    { id: 1, dialog: "Hei" },
    { id: 2, dialog: 'Goood' },
    { id: 3, dialog: 'Nice' },
    { id: 4, dialog: 'Like' }
  ],
  onames: [
    { id: 1, name: 'Sergey' },
    { id: 2, name: 'Valera' },
    { id: 3, name: 'Nastya' },
    { id: 4, name: 'Mila' },
    { id: 5, name: 'Pasha' }
  ],
  di: '12233'
}

const dialogPageReducer = (state=InitialState, action) => {
     switch (action.type) {
     case "ADD-DIALOG": {
        let newDi = {
          id: 1,
          dialog: action.dialogsform
        }
        // state.messdata.push(newDi)
       return {...state,
        messdata: [...state.messdata, newDi],
        }
      }
  
      case "UPDATE-DI":
        
       return {...state,
        di:action.dialogsform}
      //  state.di = action.newDialog;
       
      default: return state
}
}

export default dialogPageReducer

export const addDialogActionCreator = (dialogsform) => {
    return { type: "ADD-DIALOG", dialogsform }
  }
  // export const updateDiActionCreator = (body) => {
  //   return {type: "UPDATE-DI", newDialog: body}
  // }
