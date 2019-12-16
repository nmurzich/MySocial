let InitialState = {messages: [
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
newText: "128299"}


const profilePageReducer = (state = InitialState, action) => {
    switch (action.type) {
    case "ADD-POST": 
    let newPost = {
      id: 5,
      message: state.newText,
      liked: 4,
      ava: 'MA'
    }     
   return {...state, 
    messages: [...state.messages, newPost],
    newText:""
  }

   
// state.messages.push(newPost)
      

  case "UPDATE-NEW-TEXT":
    // state.newText = action.body;
        return {...state, 
          newText: action.body}
default: return state
}
  }
  export default profilePageReducer

  export const addPostActionCreator = () => {
    return { type: "ADD-POST" }
  }
  
  export const updateNewTextActionCreator = (text) => {
    return { type: "UPDATE-NEW-TEXT", body: text }
  }

 