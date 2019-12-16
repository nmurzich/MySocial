import React from 'react';
import Cc from './Content.module.css'
import Post from './Post'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostContainer from './PostContainer'










const Content = (props) => {
   
    return (
        <div>
            <div><ProfileInfo/></div>
                <div><PostContainer 
                // store={props.store}
                // messages={props.messages} onames={props.onames} 
                //       newText= {props.newText}

                //       dispatch={props.dispatch}
                            //  addPost={props.addPost} 
                            // updateNewText={props.updateNewText}
                /> </div>
                        </div>
    )
}





export default Content


