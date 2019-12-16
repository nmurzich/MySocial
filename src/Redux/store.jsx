import profilePageReducer from './profilePageReducer'
import dialogPageReducer from './dialogPageReducer'
import sidebarFriendsReducer from './sidebarFriendsReducer'


let store = {
  _state: {
    profilePage: {
      messages: [
        { id: 1, message: "Hi, kapytka!", liked: 2, ava: 'HA' },
        { id: 2, message: 'Nice to meet u', liked: 4444, ava: 'MA' },
        { id: 3, message: 'Good night', liked: '5', ava: 'KY' }
      ],
      onames: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Nastya' },
        { id: 4, name: 'Mila' },
        { id: 5, name: 'Pasha' }
      ],
      newText: "128299"

    },

    dialogPage: {
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

    },
    friendsPage: {
      friends: [
        { id: 1, name: 'Kolya', foto: 1, message: 1 },
        { id: 2, name: 'Rita', foto: 2, message: 555 },
        { id: 3, name: 'Serg', foto: 3, message: 654 }
      ],
      myfriendPost: "",
      fof: [
        { id: 1, name: 'wera' },
        { id: 3, name: 'sara' },
        { id: 3, name: 'masa' }
      ]
    },

  },
  getState() {
    return this._state
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newText,
  //     liked: 4,
  //     ava: 'MA'
  //   }
  //   this._state.profilePage.messages.push(newPost)
  //   this._rerenderIntireTree(this._state)
  // },

  // addDialog() {
  //   let newDi = {
  //     id: 1,
  //     dialog: this._state.dialogPage.di
  //   }
  //   this._state.dialogPage.messdata.push(newDi)
  //   this._rerenderIntireTree(this._state)
  // },

  // updateDi(text) {
  //   this._state.dialogPage.di = text
  //   this._rerenderIntireTree(this._state)
  // },
  // updateNewText(body) {
  //   this._state.profilePage.newText = body;
  //   this._rerenderIntireTree(this._state)
  // },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  _callSubscriber() { console.log("qw") },

  dispatch(action) 
  {this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action)
    this._state.friendsPage = sidebarFriendsReducer (this._state.friendsPage, action)
    this._callSubscriber(this._state);
  }
  }


    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newText,
    //     liked: 4,
    //     ava: 'MA'
    //   }

    //   this._state.profilePage.messages.push(newPost)
    //   this._rerenderIntireTree(this._state)
    // }

    // else if (action.type === "UPDATE-NEW-TEXT") {
    //   this._state.profilePage.newText = action.body;
    //   this._rerenderIntireTree(this._state)
    // }
  //   else if (action.type === "ADD-FRIEND-MESSAGE") {
  //     let newText = {
  //       id: 1,
  //       name: 'Kolya',
  //       foto: 1,
  //       message: this._state.friendsPage.myfriendPost
  //     }

  //     this._state.friendsPage.friends.push(newText)
  //     this._rerenderIntireTree(this._state)
  //   }

  //   else if (action.type === "MY-FRIEND-MESSAGE") {
  //     this._state.friendsPage.myfriendPost = action.body;
  //     this._rerenderIntireTree(this._state)
  //   }
  //     else if (action.type === "ADD-DIALOG") {
  //     let newDi = {
  //       id: 1,
  //       dialog: this._state.dialogPage.di
  //     }
  //     this._state.dialogPage.messdata.push(newDi)
  //     this._rerenderIntireTree(this._state)
  //   }

  //   else if (action.type === "UPDATE-DI") {
  //     this._state.dialogPage.di = action.newDialog;
  //     this._rerenderIntireTree(this._state)
  //   }
  // }
// }










// dispatch (action) 
// {if (action.type === 'UPDATE-NEW-TEXT') {this._state.profilePage.newText = action.text; this._rerenderIntireTree(this._state)}
//   else if (action.type === 'ADD-POST') {let newPost = {
//     id: 5,
//     message: this._state.profilePage.newText,
//     liked: 4,
//     ava: 'MA'}
//     this._state.profilePage.messages.push(newPost)
//     this._rerenderIntireTree(this._state)}}

export default store









// let rerenderIntireTree = () => {
//   console.log("qw")
// }

// let state = {
// profilePage: {
//       messages: [
//  {id: 1, message: "Hi, kapytka!", liked: 2, ava: 'HA'},
//  {id: 2, message:'Nice to meet u', liked: 4444, ava: 'MA'},
//  {id: 3, message: 'Good night', liked: '5', ava: 'KY'}
// ],
// onames: [
//  {id: 1, name: 'Sergey'},
//  {id: 2, name: 'Valera'},
//  {id: 3, name: 'Nastya'},
//  {id: 4, name: 'Mila'},
//  {id: 5, name: 'Pasha'}
// ],
// newText: "128299"

// },
// dialogPage: { 
//   messdata: [
// {id: 1, dialog: "Hei"},
// {id: 2, dialog: 'Goood'},
// {id: 3, dialog: 'Nice'},
// {id: 4, dialog: 'Like'}
// ],
// onames: [
//   {id: 1, name: 'Sergey'},
//   {id: 2, name: 'Valera'},
//   {id: 3, name: 'Nastya'},
//   {id: 4, name: 'Mila'},
//   {id: 5, name: 'Pasha'}
//  ],
// di: '12233'

// },
// friendsPage: {
// friends: [
//  {id: 1, name: 'Kolya', foto: 'https://webinfo.kz/wp-content/uploads/2019/05/webinfo.kz-4.05.2019-zaZ7SGcG6WgzyrMwpwgoQe8m17FikPuT.jpg'},
//  {id: 2, name: 'Rita', foto: 'https://c.pxhere.com/photos/f4/34/person_human_child_girl_face_view_blond_out-862595.jpg!d'},
//  {id: 3, name: 'Serg', foto: 'https://storage.yvision.kz/images/user/hitch1989/6nwLG8PD7go188yfO0U8x2C95Dw31W.jpg'}
// ],
// fof: [
//   {id: 1, name: 'wera'},
//   {id: 3, name: 'sara'},
//   {id: 3, name: 'masa'}
// ]}


// }


// export const addPost = () => {
// let newPost = {
// id: 5,
// message: state.profilePage.newText,
// liked: 4,
// ava: 'MA'}
// state.profilePage.messages.push(newPost)

// rerenderIntireTree(state)

// }

// export const addDialog = () => {
//   let newDi = {
//     id: 1,
//     dialog: state.dialogPage.di
//   }
//   state.dialogPage.messdata.push(newDi)
//   rerenderIntireTree(state)
// }

// export const updateDi = (text) => {
//   state.dialogPage.di = text
//   rerenderIntireTree(state)

// }

// export const updateNewText= (text) => {
// state.profilePage.newText = text;

// rerenderIntireTree(state)
//  }


//  export const subscribe = (observer) => {
//    rerenderIntireTree = observer
//  }
//   export default state