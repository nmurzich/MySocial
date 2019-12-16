import React from 'react'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: "1", name: 'Pasha', status: "ky-ky", follow: "true", region: { country: 'Belarus', city: 'Minsk' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
            { id: "2", name: 'Tanya', status: "Yoyoyoy", follow: "false", region: { country: 'Russia', city: 'Moscow' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" },
            { id: "3", name: 'Kolya', status: "Liiii", follow: "true", region: { country: 'Belarus', city: 'Gomel' }, photo: "https://www.1zoom.me/big2/262/261162-Sepik.jpg" }
        ])
    }
    return <div>
        {props.users.map(u => <div key={u.id}>

            {u.id}

            {u.name}

            {u.status}

            <div>
                {u.follow
                    ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                    : <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>}</div>

            {u.region.country}
            {u.region.city}
            <img src={u.photo} />

        </div>)

        }
    </div>

}

export default Users

