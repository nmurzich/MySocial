import profilePageReducer from './profilePageReducer'
import dialogPageReducer from './dialogPageReducer'
import sidebarFriendsReducer from './sidebarFriendsReducer'


let store = {
  _Redux: {
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
  getRedux() {
    return this._Redux
  },

  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._Redux.profilePage.newText,
  //     liked: 4,
  //     ava: 'MA'
  //   }
  //   this._Redux.profilePage.messages.push(newPost)
  //   this._rerenderIntireTree(this._Redux)
  // },

  // addDialog() {
  //   let newDi = {
  //     id: 1,
  //     dialog: this._Redux.dialogPage.di
  //   }
  //   this._Redux.dialogPage.messdata.push(newDi)
  //   this._rerenderIntireTree(this._Redux)
  // },

  // updateDi(text) {
  //   this._Redux.dialogPage.di = text
  //   this._rerenderIntireTree(this._Redux)
  // },
  // updateNewText(body) {
  //   this._Redux.profilePage.newText = body;
  //   this._rerenderIntireTree(this._Redux)
  // },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  _callSubscriber() { console.log("qw") },

  dispatch(action) 
  {this._Redux.profilePage = profilePageReducer(this._Redux.profilePage, action)
    this._Redux.dialogPage = dialogPageReducer(this._Redux.dialogPage, action)
    this._Redux.friendsPage = sidebarFriendsReducer (this._Redux.friendsPage, action)
    this._callSubscriber(this._Redux);
  }
  }


    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 5,
    //     message: this._Redux.profilePage.newText,
    //     liked: 4,
    //     ava: 'MA'
    //   }

    //   this._Redux.profilePage.messages.push(newPost)
    //   this._rerenderIntireTree(this._Redux)
    // }

    // else if (action.type === "UPDATE-NEW-TEXT") {
    //   this._Redux.profilePage.newText = action.body;
    //   this._rerenderIntireTree(this._Redux)
    // }
  //   else if (action.type === "ADD-FRIEND-MESSAGE") {
  //     let newText = {
  //       id: 1,
  //       name: 'Kolya',
  //       foto: 1,
  //       message: this._Redux.friendsPage.myfriendPost
  //     }

  //     this._Redux.friendsPage.friends.push(newText)
  //     this._rerenderIntireTree(this._Redux)
  //   }

  //   else if (action.type === "MY-FRIEND-MESSAGE") {
  //     this._Redux.friendsPage.myfriendPost = action.body;
  //     this._rerenderIntireTree(this._Redux)
  //   }
  //     else if (action.type === "ADD-DIALOG") {
  //     let newDi = {
  //       id: 1,
  //       dialog: this._Redux.dialogPage.di
  //     }
  //     this._Redux.dialogPage.messdata.push(newDi)
  //     this._rerenderIntireTree(this._Redux)
  //   }

  //   else if (action.type === "UPDATE-DI") {
  //     this._Redux.dialogPage.di = action.newDialog;
  //     this._rerenderIntireTree(this._Redux)
  //   }
  // }
// }










// dispatch (action) 
// {if (action.type === 'UPDATE-NEW-TEXT') {this._Redux.profilePage.newText = action.text; this._rerenderIntireTree(this._Redux)}
//   else if (action.type === 'ADD-POST') {let newPost = {
//     id: 5,
//     message: this._Redux.profilePage.newText,
//     liked: 4,
//     ava: 'MA'}
//     this._Redux.profilePage.messages.push(newPost)
//     this._rerenderIntireTree(this._Redux)}}

export default store









// let rerenderIntireTree = () => {
//   console.log("qw")
// }

// let Redux = {
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
// message: Redux.profilePage.newText,
// liked: 4,
// ava: 'MA'}
// Redux.profilePage.messages.push(newPost)

// rerenderIntireTree(Redux)

// }

// export const addDialog = () => {
//   let newDi = {
//     id: 1,
//     dialog: Redux.dialogPage.di
//   }
//   Redux.dialogPage.messdata.push(newDi)
//   rerenderIntireTree(Redux)
// }

// export const updateDi = (text) => {
//   Redux.dialogPage.di = text
//   rerenderIntireTree(Redux)

// }

// export const updateNewText= (text) => {
// Redux.profilePage.newText = text;

// rerenderIntireTree(Redux)
//  }


//  export const subscribe = (observer) => {
//    rerenderIntireTree = observer
//  }
//   export default Redux