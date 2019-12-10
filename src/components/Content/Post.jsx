import React from 'react';
import MyPost from './MyPost'
import {addPostActionCreator, updateNewTextActionCreator} from '../../Redux/profilePageReducer'

debugger

const Post = (props) => {
  
    
    let MessElement = props.messages.map(e => <MyPost 
                message = {e.message} liked = {e.liked} ava = {e.ava} id = {e.id} />)
                
    let addPost = () => {
        props.dispatch (addPostActionCreator())
              
    }      
    let onPostChange = (e) => {
        let text = e.target.value;  
        let action = updateNewTextActionCreator (text)
        props.dispatch (action)
         }
        
    return (
 <div>
  <div>
 
  <textarea onChange={onPostChange} value={props.newText}/>

 <div> <button onClick = {addPost}>add post</button> </div>
{MessElement}
          </div>
  </div>
  )

}
 

export default Post