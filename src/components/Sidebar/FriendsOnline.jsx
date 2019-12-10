import React from 'react';
import {NavLink} from "react-router-dom"

const FriendsOnline = (props) =>{


let Fre = props.fof.map(f => <FredOn id={f.id} name={f.name}/>)
    return (
        <div>{Fre}</div>
    )
}

const FredOn = (props) => {
    let path = "/fo" + props.id
    return (
               <div> <div><NavLink to = {path}>{props.name}</NavLink></div>
                                </div>
    )

}

export default FriendsOnline