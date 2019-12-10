import React from 'react';
import Cc from './Content.module.css'
import Post from './Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'










const Content = (props) => {
   
    return (
        <div>
            <div><ProfileInfo/></div>
                <div><Post 
                messages={props.messages} onames={props.onames} 
                      newText= {props.newText}

                      dispatch={props.dispatch}
                            //  addPost={props.addPost} 
                            // updateNewText={props.updateNewText}
                /> </div>
                        </div>
    )
}





export default Content


