import React from 'react'
import styles from './users.module.css';
import * as axios from 'axios'
import userPhoto from '../../../assets/images/userPhoto.jpg'

const Users = (props) => {
    //    
    let getUsers = () => 
    {
        if (props.users.length === 0) 
            {
                axios.get("https://social-network.samuraijs.com/api/1.0/users")
                                .then(response => { props.setUsers(response.data.items) })
            }
        }

        // props.setUsers([
        //         { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: 'Belarus', city: 'Minsk' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
        //         { id: "2", name: 'Tanya', status: "Yoyoyoy", follow: "false", region: { country: 'Russia', city: 'Moscow' }, photo: "https://mirzhivotnye.ru/wp-content/uploads/2018/08/Suslik-68-768x813.jpg" },
        //         { id: "3", name: 'Kolya', status: "Liiii", follow: "true", region: { country: 'Belarus', city: 'Gomel' }, photo: "https://s1.1zoom.ru/b5050/331/246106-Sepik_2048x1152.jpg" }
        //     ])
        // }
        return <div>
            <button onClick = {getUsers}>Дай юзеров</button>
            {props.users.map(u => <div key={u.id}>

                <div> {u.id} </div>

                <div>{u.name}</div>

                <div>{u.status}</div>


                {u.followed
                    ? <button onClick={() => { props.unfollowed(u.id) }}>UnFollow</button>
                    : <button onClick={() => { props.followed(u.id) }}>Follow</button>}

                <div>{"u.region.country"}</div>
                <div> {"u.region.city"}</div>
                <span><img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} /> </span>

            </div>)

            }
        </div>

    }




export default Users

