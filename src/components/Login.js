import { useState } from 'react';
// import login from '../utils';
import instaPhone from './images/instaPhone.png';
import instagramLogo from './images/instagramLogo.png';
import AddUser from './addUser';

const Login = ({ setter }) => {
    const [showAddUser, setAddUser] = useState(false);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //these are all set values

    const handleClick = () => {
        setAddUser(!showAddUser);
    }

    async function login(username, email, password, setter) {
        try {
            const response = await fetch('http://localhost:5001/login', {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
            const data = await response.json();
            console.log(data)
            setter(data.user)
            console.log(data.user)
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        await login(username, email, password, setter);
        console.log(login)
    }

    return showAddUser ? (
        <AddUser />
    ) : (
        <>
            <div className='loginmain'>
                <div className='instaPhone'>
                    <img src={instaPhone} width='454px' />
                </div>

                <div className='boxOrder'>
                    <div className='formBox'>
                        <img className='instaLogo' src={instagramLogo} width='250px' />
                        <h1 className='boxh1'>Login to Instagram</h1>

                        <div>
                            <form className='signinform' onSubmit={submitHandler} > {/*(once weve submit it, were going to run a submit) */}
                                <input className='logIn' onChange={(event) => setUsername(event.target.value)} placeholder='Username' />
                                <input className='logIn' onChange={(event) => setEmail(event.target.value)} placeholder='Email Address' />
                                <input className='logIn' onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                                <button className='signinbtn' onClick={submitHandler}>Log in</button>
                            </form>
                        </div>
                    </div>

                    <div className='noAccContainer'>
                        <p>Dont't have an account? <a className='signuplink' onClick={handleClick} ><b>Sign up</b></a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;