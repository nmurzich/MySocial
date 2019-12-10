let InitialRedux = {
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
}

const sidebarFriendsReducer = (Redux=InitialRedux, action) => {
 switch (action.type) {
  case "ADD-FRIEND-MESSAGE":
    let newText = {
      id: 1,
      name: 'Kolya',
      foto: 1,
      message: Redux.myfriendPost
    }
    Redux.friends.push(newText)
  return Redux
    case "MY-FRIEND-MESSAGE":
    Redux.myfriendPost = action.body
    return Redux
    default: return Redux
  }
}
  

    export default sidebarFriendsReducer

    export const addFriendMessageActionCreator = () => {
      return {type: "ADD-FRIEND-MESSAGE"}
    }
    
    export const myFriendMessageActionCreator = (text) => {
      return {type: "MY-FRIEND-MESSAGE", body: text}
    }