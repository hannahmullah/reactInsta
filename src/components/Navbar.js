import React from 'react';
import '../App.css';
import instagramLogo from './images/instagramLogo.png';
import home from './images/home.png'
import inbox from './images/share.png'
import explore from './images/explore.png'
import likes from './images/love.png'
import account from './images/account.jpg'
import App from '../App';

const Navbar = ({ logout }) => {

    const handleLogout = () => {
        logout();
    };
    console.log(handleLogout, logout)
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
                        <DropdownItem onClick={handleLogout} text={'Logout'} />

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