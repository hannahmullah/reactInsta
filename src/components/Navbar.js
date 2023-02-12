import React, { useState } from 'react';
import '../App.css';
import instagramLogo from './images/instagramLogo.png';
import home from './images/home.png'
import inbox from './images/share.png'
import explore from './images/explore.png'
import likes from './images/love.png'
import account from './images/account.jpg'

const Navbar = ({ user, logout, loggedIn, setUser, setLoggedIn }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <div class="navContainer">
                <div>
                    <img className='instaLogoNav' src={instagramLogo} />
                </div>
                <div>
                    <input className='navSearch' placeholder='Search' />
                </div>

                <div>
                    <img className="navButton" src={home} width={'25px'} />
                    <img className="navButton" src={inbox} width={'25px'} />
                    <img className="navButton" src={explore} width={'25px'} />
                    <img className="navButton" src={likes} width={'25px'} />
                    <img
                        className="navButton menu-trigger"
                        src={account}
                        width={'30px'}
                        onClick={toggleDropdown}
                    />
                </div>
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} >
                    {user && <p>{user} logged in</p>}
                    {user && <a className='signuplink' onClick={logout} ><b>Log out</b></a>}
                </div>
            </div>
        </div >
    )
}

export default Navbar;
