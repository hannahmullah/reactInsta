import React from 'react';
import '../App.css';
import instagramLogo from './images/instagramLogo.png';
import home from './images/home.png'
import inbox from './images/share.png'
import explore from './images/explore.png'
import likes from './images/love.png'
import account from './images/account.jpg'

const Navbar = ({ user, logout, loggedIn, setUser, setLoggedIn }) => {


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
                    <button><img className="navButton menu-trigger" src={account} width={'30px'} /></button>
                </div>
                <div className='dropdown-menu' >
                    {/* <div>
                        {user ? <h1>{user} logged in</h1> : <h1>Logged out</h1>}
                    </div> */}
                    {/* <p>{user ? `${user} logged in` : 'Logged out'}</p> */}
                    {/* {user && <p>{user.toString()} logged in</p>} */}
                    {/* {user && user.name && <p>{user.name} logged in</p>} */}

                    {user && <p>{user} logged in</p>}
                    {user && <a className='signuplink' onClick={logout} ><b>Log out</b></a>}



                    {/* {user ? <DropdownItem text={user} /> : <DropdownItem text={'Logged out'} />} */}
                    {/* <DropdownItem text={user} />
                        <DropdownItem text={'Logged out'} /> */}

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