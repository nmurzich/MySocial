import React from 'react'
import styles from './users.module.css';
import { NavLink } from "react-router-dom"
import userPhoto from '../../../assets/images/userPhoto.jpg'


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
                                   
            {/* // <button onClick = {getUsers}>Дай юзеров</button> */}
            {props.users.map(u => <div key={u.id}>

               
                <div>{u.status} </div>
                <div> </div>
                    <span>
                    {u.followed ? <button onClick={() => { props.unfollowed(u.id) }}>UnFollow</button>
                    : <button onClick={() => { props.followed(u.id) }}>Follow</button>}</span>
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

