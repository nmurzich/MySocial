let InitialRedux = {messages: [
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
const profilePageReducer = (Redux = InitialRedux, action) => {
    switch (action.type) {
    case "ADD-POST": 
    let newPost = {
      id: 5,
      message: Redux.newText,
      liked: 4,
      ava: 'MA'
    }
   Redux.messages.push(newPost)
   return Redux
      

  case "UPDATE-NEW-TEXT":
    Redux.newText = action.body;
        return Redux
default: return Redux
}
  }
  export default profilePageReducer

  export const addPostActionCreator = () => {
    return { type: "ADD-POST" }
  }
  
  export const updateNewTextActionCreator = (text) => {
    return { type: "UPDATE-NEW-TEXT", body: text }
  }

 