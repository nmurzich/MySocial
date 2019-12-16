let InitialState = {
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

const sidebarFriendsReducer = (state=InitialState, action) => {
 switch (action.type) {
  case "ADD-FRIEND-MESSAGE":
    let newText = {
      id: 1,
      name: 'Kolya',
      foto: 1,
      message: state.myfriendPost
    }
    
  return {...state,
    friends: [...state.friends, newText],
    myfriendPost:""}

  // state.friends.push(newText)
    case "MY-FRIEND-MESSAGE":
    
    return {...state,
    myfriendPost: action.body}

    default: return state
  }
}
  

    export default sidebarFriendsReducer

    export const addFriendMessageActionCreator = () => {
      return {type: "ADD-FRIEND-MESSAGE"}
    }
    
    export const myFriendMessageActionCreator = (text) => {
      return {type: "MY-FRIEND-MESSAGE", body: text}
    }