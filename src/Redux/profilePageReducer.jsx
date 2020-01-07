import { usersAPI, profileAPI } from '../api/api'


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
newText: "128299",
prolile: null,
aboutMe: null,
status: "1234567890"}


const profilePageReducer = (state = InitialState, action) => {
    switch (action.type) {
    case "ADD-POST": 
    let newPost = {
      id: 5,
      message: action.formforposts,
      liked: 4,
      ava: 'MA'
    }     
   return {...state, 
    messages: [...state.messages, newPost],
      }
   
// state.messages.push(newPost)
      

  // case "UPDATE-NEW-TEXT":
  //   // state.newText = action.body;
  //       return {...state, 
  //         newText: action.body}

          case 'PHOTO_CLICK': {
            return {...state, profile: action.profile}
        }
        case "ABOUT-ME-AC": {
          return {...state, aboutMe: action.aboutMe}
        }

      case "CONTACTS-AC": {
        return {...state, contacts: [...state.contacts]}
      }
      case "LOOKING-FOR-A-JOB": {
        return {...state, lookingForAJob: action.lookingForAJob}
      }
      case "LOOKING-FOR-A-JOB-DESCRIPTION": {
        return {...state, lookingForAJobDescription: action.lookingForAJobDescription}
      }
      case "FULL-NAME-AC": {
        return {...state, fullName: action.fullName}
      }
case "GET-USER-STATUS": {
        return {...state, status: action.status}
      // }
      // case "UPDATE-USER-STATUS": {
      //   return {...state, status: action.status}

      }
default: return state
}
  }
  export default profilePageReducer

  
export const photoclickAC = (profile) => {
  return {type: "PHOTO_CLICK", profile}
}


  export const addPostActionCreator = (formforposts) => {
    return { type: "ADD-POST", formforposts }
  }
  
  // export const updateNewTextActionCreator = (text) => {
  //   return { type: "UPDATE-NEW-TEXT", body: text }
  // }

  export const aboutMeAC = (aboutMe) => {
    return {type: "ABOUT-ME-AC", aboutMe}
  }

export const contactsAC = (contacts) => {
  return {type: "CONTACTS-AC", contacts}
}

export const lookingForAJobAC = (lookingForAJob) => {
return {type: "LOOKING-FOR-A-JOB", lookingForAJob}
}

export const lookingForAJobDescription = (lookingForAJobDescription) => {
  return {type: "LOOKING-FOR-A-JOB-DESCRIPTION", lookingForAJobDescription}

}

export const fullNameAC = (fullName) => {
  return {type: "FULL-NAME-AC", fullName}
}

export const getUserStatusAC = (status) => ({type: "GET-USER-STATUS", status})


// export const updateUserStatusAC = (status) => {return {type: "UPDATE-USER-STATUS", status: status}}


export const getProfileThunk = (userId) => {
  return (dispatch) => {
        usersAPI.getProfileInfoContainer(userId)
    .then(data => {dispatch(photoclickAC(data.data))})}}



export let getUserStatusThunk = (userId) => (dispatch) => {
   profileAPI.getUserStatus(userId)
  .then(response => {dispatch(getUserStatusAC(response.data))})
      }

export let updateUserStatusThunk = (status) => (dispatch) => {
 profileAPI.updateMyStatus(status)
  .then(response => {if (response.data.resultCode ===  0) {dispatch(getUserStatusAC(status))}
})}

// не работает getUserStatusThunk и updateUserStatusThunk (ошибка при чтении типа)







  






    

  





 