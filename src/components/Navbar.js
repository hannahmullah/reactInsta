import React from 'react';
import '../App.css';
import instagramLogo from './images/instagramLogo.png';
import home from './images/home.png'
import inbox from './images/share.png'
import explore from './images/explore.png'
import likes from './images/love.png'
import account from './images/account.jpg'

const Navbar = (user, setUser, setLoggedIn) => {


    const logout = () => {
        document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
        setUser('');
        setLoggedIn(false);
    }


    console.log(logout)
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
                    <img className="navButton menu-trigger" src={account} width={'30px'} />
                </div>
                <div className='dropdown-menu'>
                    <ul>

                        <DropdownItem text={'logged in'} />
                        <DropdownItem text={'Logout'} />

                        {user ? <h1>{user} logged in</h1> : <h1>Logged out</h1>}
                        {user && <button onClick={logout}>Logout</button>}

                    </ul>
                </div>

            </div>

            <div>

            </div>

        </div >


    )

}
function DropdownItem(props) {

    return (
        <>
            <li className='dropdownItem'>
                <img src={props.img} />
                <a>{props.text}</a>
            </li>
        </>
    )
}

export default Navbar;

/*  */