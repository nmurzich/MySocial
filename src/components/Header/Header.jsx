import React from 'react';
import He from './Header.module.css'

   

const Header = () => {
        return (
        <header className= {He.header}> 
<div className= {`${He.item} ${He.active}`}>Telephone</div>
<img src = "https://3.bp.blogspot.com/-aQRokCBvaYg/WX8CopAGoNI/AAAAAAAAAaM/A1RkT6Y8ZJILVWBEijq1zLd8I2BzCE7_wCLcBGAs/s1600/2000px-Apple_logo_black.svg.png"/>            
</header>
)
}

export default Header


