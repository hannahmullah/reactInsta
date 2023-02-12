import React, { component, useState } from "react";
import { addUser, login } from "../utils/";
import instagramLogo from './images/instagramLogo.png';
import Login from "./Login";


const AddUser = ({ setter }) => {
    const [showLogin, setLogin] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setLogin(!showLogin);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing add user request")
        try {
            await addUser(username, email, password, setter)
            setMessage("You have successfully created your account. Please go back to the login page.");
        } catch (error) {
            setMessage(`An error occured: ${error}`);
        }
    };

    return showLogin ? (
        <Login />
    ) : (
        <div className="signupContainer">
            <div className='signup-box'>
                <img className='instaLogo' src={instagramLogo} width='250px' />
                <h1 className="boxh1">Sign Up</h1>

                <form className='signupform' onSubmit={submitHandler}>
                    <input className='signup' onChange={(event) => setEmail(event.target.value)} placeholder='Email address' />
                    <input className='signup' onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
                    <input className='signup' onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                    <button className='signupbtn' onClick={submitHandler}>Sign Up</button>
                </form>
                <div>
                    <a className='loginInRoute' onClick={handleClick} ><b>Back to Log In</b></a>
                </div>

                <div className="popup">
                    {message && <p>{message}</p>}
                    {/* sign up form */}
                </div>
            </div>
        </div>

    )
}

export default AddUser;