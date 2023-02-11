import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Login from './components/Login';
import { readCookie } from './common/index';
import { authCheck } from './utils/index';


function App() {
  const [user, setUser] = useState(''); //default value of Harry //created a state variable called user. they are like global variables 
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookie, setCookie] = useState();

  async function loginWithToken(cookie) {
    const user = await authCheck(cookie);
    setUser(user);
    setLoggedIn(true)
    setCookie(cookie);
  }

  useEffect(() => {
    let cookie = readCookie('jwt+token');
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  }, []); //useEffect says i want to run this when the function is first run y default at the beginning

  const logout = () => {
    document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
    setUser('');
    setLoggedIn(false);
  }


  return (
    <div className="App">

      {/* <Navbar user={user} setUser={setUser} setLoggedIn={setLoggedIn} /> */}
      {/* {user ? <h1>{user} logged in</h1> : <h1>Logged out</h1>} */}
      {/* {user && <p>{user} logged in</p>}
      {user && <a className='signuplink' onClick={logout} ><b>Log out</b></a>} */}


      {user && <Navbar user={user} loggedIn={loggedIn} logout={logout} />}
      {user ? <Post /> : <Login setter={setUser} />}


      {/* && is the equivalent of an IF statement, ? and : are the equivalent of an IF ELSE statement */}
      {/* <input onChange={(event) => setUser(event.target.value)} /> html event in as the input and we can then see what events will give me */}

    </div >

  );
}

export default App;
