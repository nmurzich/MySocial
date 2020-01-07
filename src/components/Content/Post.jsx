import React from 'react'
import MyPost from './MyPost'
import {addPostActionCreator, updateNewTextActionCreator} from '../../Redux/profilePageReducer'
import {Field, reduxForm } from 'redux-form'
import {require} from '../Validation/Validate'
import {MaxlengthCreator} from '../Validation/Validate'
import {Textarea} from '../Validation/WorkWithMistakes'

const maxLength10 = MaxlengthCreator(10)

const Post = (props) => {
    
    
    let MessElement = props.messages.map(e => <MyPost 
                message = {e.message} liked = {e.liked} ava = {e.ava} id = {e.id} />)
                
    let addPost = (values) => {
        props.addPost(values.formforposts)
              
    }      
    // let onPostChange = (e) => {
    //     let text = e.target.value;  
    //     props.onPostChange(text)       
    //      }
        
    return (
        <div>  {MessElement} 
        <WithReduxPostForm onSubmit = {addPost}/>
        </div>
        
        )
        
            }
      


 let PostMessageForm = (props) => {
     return (

 <form onSubmit = {props.handleSubmit}>
     <Field component = {Textarea} name = {"formforposts"} placeholder = {"It`s your time to write smth!"}
     validate = {[require, maxLength10]}
     />
<button>add post</button> 

     </form>)}
 
const WithReduxPostForm = reduxForm ({form: "postform"})(PostMessageForm) 



export default Post