let InitialRedux = {
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

const dialogPageReducer = (Redux=InitialRedux, action) => {
     switch (action.type) {
     case "ADD-DIALOG": {
        let newDi = {
          id: 1,
          dialog: Redux.di
        }
        Redux.messdata.push(newDi)
       return Redux
      }
  
      case "UPDATE-DI":
        Redux.di = action.newDialog;
       return Redux
       default: return Redux
}
}

export default dialogPageReducer

export const addDialogActionCreator = () => {
    return { type: "ADD-DIALOG" }
  }
  export const updateDiActionCreator = (body) => {
    return {type: "UPDATE-DI", newDialog: body}
  }
