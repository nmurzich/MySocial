import React from 'react'
import styles from './users.module.css';
import { NavLink } from "react-router-dom"
import userPhoto from '../../../assets/images/userPhoto.jpg'
import *as axios from 'axios'
import {usersAPI} from '../../../api/api'
import {UsersFollowThunk} from '../../../Redux/usersPageReducer'



const ClearUsers = (props) => {
        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
        
        let pages = [];
        for (let i = 1; i<= pageCount; i++) {pages.push(i)}
        
        return <div>
                        {
            pages.map( p=>{
            return <div className={props.currentPage === p && styles.activedPage }
            onClick = {(e) => {props.onNumberClick(p)}}
            // {(e) => {onNumberClick(p)}}
            >{p}</div>})} 
                                   
           {/* <button onClick = {getUsers}>Дай юзеров</button>  */}
            {props.users.map(u => <div key={u.id}>

               
                <div>{u.status} </div>
                <div> </div>
                    <span>
                       
                    {u.followed ?  <button disabled =  {
                        props.isFetchingButton.some(id => id === u.id)
                                    }

                     onClick={() => { 
                        props.UsersUnFollowThunk(u.id)}}
                        // props.disablingNow(true, u.id)
                        // usersAPI.getUnFollow(u.id)
                        // .then(response => {if (response.data.resultCode == 1) props.unfollowed(u.id) })
                        
                    //     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    // {withCredentials: true,
                    // headers:  {"API-KEY": "7d08c86e-266b-427c-8e89-df3dc187da0e"}})
                    //                     .then(response => {if (response.data.resultCode == 0) {props.unfollowed(u.id) }
                    
                    // props.disablingNow(false, u.id)}}
                     
                    
                //    {u.followed ? <button onClick={() => { props.unfollowed(u.id) }}
                >UnFollow</button>

                    :<button
                     disabled = {props.isFetchingButton.some(id => id === u.id)}
                     
                        
                        onClick={() => { 
                            
                        props.FollowedThunk(u.id)
                            // followinInProgressThunkCreator()}}
                        // props.disablingNow(true, u.id)
                        // // UsersFollowThunk()}}
                        // usersAPI.getFollow(u.id)
                //         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                //    {withCredentials: true, 
                //     header: {"API-KEY": "7d08c86e-266b-427c-8e89-df3dc187da0e"}
                //    }) 
                    // .then(response => {if (response.data.resultCode == 0) {props.followed(u.id)} 
                    //     props.disablingNow(false, u.id)})}}
                        }}
                        >Follow</button>}
                        </span>
                        
                   
                    {/* // : <button onClick={() => { props.followed(u.id) }}>Follow</button>}</span> */}
 <div>{u.id} </div> 
 <div>{u.name} </div>
 {"u.region.country"}
 {"u.region.city"}
 
 <NavLink to={'/profile/' + u.id}>
     <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} /> 
     </NavLink>
 
                </div>)}
</div>}

                   
                   

       
  




export default ClearUsers

