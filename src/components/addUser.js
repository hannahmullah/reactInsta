import React, { component, useState } from "react";
import { addUser, login } from "../utils/";
import instagramLogo from './images/instagramLogo.png';


const AddUser = ({ setter }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing add user request")
        await addUser(username, email, password, setter);
    }

    return (
        <div className="signupContainer">
            <div className='signup-box'>
                <img className='instaLogo' src={instagramLogo} width='250px' />
                <h1 className="boxh1">Sign Up</h1>

                <form className='signupform' onSubmit={submitHandler}>
                    <input className='signup' onChange={(event) => setUsername(event.target.value)} placeholder='Mobile number or email address' />
                    <input className='signup' onChange={(event) => setEmail(event.target.value)} placeholder='Full Name' />
                    <input className='signup' onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
                    <input className='signup' onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                    <button className='signupbtn' onClick={submitHandler}>Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default AddUser;