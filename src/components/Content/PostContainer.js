import React from 'react'
import {addPostActionCreator} from '../../Redux/profilePageReducer'
import Post from '../Content/Post'
import {connect} from 'react-redux'


// const PostContainer = () => {
//       return <myContext.Consumer>
//       {store => {
  
//   let addPost = () => {
//     store.dispatch(addPostActionCreator())
           
//   }      
//   let onPostChange = (text) => {
//     store.dispatch(updateNewTextActionCreator(text))
      
//        }
      
//   return <Post 
//  addPost={addPost} onPostChange = {onPostChange}
//  messages={store.getRedux().profilePage.messages}
//  newText={store.getRedux().profilePage.newText}
//  />}
//  }
//  </myContext.Consumer>
// }
let makeToProps = (state) => {
  return {
 messages: state.profilePage.messages,
 newText: state.profilePage.newText}
}
let makeToDispatch = (dispatch) => {
  return {
  addPost: (formforposts) => {dispatch(addPostActionCreator(formforposts))},
  // onPostChange: (text) => {dispatch(updateNewTextActionCreator(text))}
  }
}

const PostContainer = connect (makeToProps, makeToDispatch)(Post)
 

export default PostContainer