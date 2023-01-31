import { useState } from 'react';
// import login from '../utils';

const Login = ({ setter }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //these are all set values


    async function login(username, email, password, setter) {
        try {
            const body = JSON.stringify({ username: "bill" })
            const response = await fetch('http://localhost:5001/login', {
                method: "POST",
                header: { "Content-Type": "application/json" },
                // body: JSON.stringify({
                //     username: "user12",
                //     email: "user12@hotmail.com",
                //     password: "password"
                // })
                body: body
            })
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            const data = await response.json();
            console.log('!!!', data)
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

    return (
        <form onSubmit={submitHandler} > {/*(once weve submit it, were going to run a submit) */}
            <input onChange={(event) => setUsername(event.target.value)} placeholder='enter username' />
            <input onChange={(event) => setEmail(event.target.value)} placeholder='enter email' />
            <input onChange={(event) => setPassword(event.target.value)} placeholder='enter password' />
            <button onClick={submitHandler}>Submit</button>
        </form>

    )
}

export default Login;