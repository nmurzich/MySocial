import React from 'react';
import He from './Header.module.css'
import {NavLink} from 'react-router-dom'

   
const Header = (props) => {
       
        return (
        <header className= {He.header}> 
<div className= {`${He.item} ${He.active}`}>Telephone</div>

{props.IsAuth ? props.data :
<NavLink to = '/login'> <div>login</div> </NavLink>}
<img src = "https://3.bp.blogspot.com/-aQRokCBvaYg/WX8CopAGoNI/AAAAAAAAAaM/A1RkT6Y8ZJILVWBEijq1zLd8I2BzCE7_wCLcBGAs/s1600/2000px-Apple_logo_black.svg.png"/>            
</header>
)
}

export default Header


