import './App.css';
import Box from './components/box';
import { useState, useEffect } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(''); //default value of Harry //created a state variable called user. they are like global variables 
  const [photos, setPhotos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => { fetchImages() }, []); //useEffect says i want to run this when the function is first run y default at the beginning


  // const myArray = [{ name: "Harry" }, { name: "George" },
  // { name: "Hermione" }, { name: "Mafalda" }];

  const fetchImages = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    console.log(response)
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos)
  }

  // for (let index = 0; index < myArray.length; index++) {
  //   const element = myArray[index];
  //   console.log(element);
  // }
  // This can be rewritten as a map function and the map function can be placed in the JSX below

  return (
    <div className="App">

      <Login setter={setUser} />
      <h1>{user} is logged in</h1>

      <main>
        <button onClick={(event) => setLoggedIn(!loggedIn)}>Login</button><br />
        {user ?
          photos.map((item, index) => {
            return (
              <div className='image-list'>
                <img src={item.download_url} alt='random images' width="300px" />
                <div>
                  <h2>{item.author}</h2>
                </div>
              </div>
            )
          })
          :
          <h1>Please log in</h1>
        }
      </main>

      {/* && is the equivalent of an IF statement, ? and : are the equivalent of an IF ELSE statement */}
      {/* <input onChange={(event) => setUser(event.target.value)} /> html event in as the input and we can then see what events will give me */}
      {/*user && <Box name={user} />} {/* if user exists then we display box name called user */}
      {/* (user == 'harry') ? <Box name='User logged in' /> : <Box name='You need to log in' />} {/* a component which is a function. The parameter name has been described here */}
      {/* <Box name='Hermoine' /> {/* the Box component can be used repeatidly as weve defined the paramater as a name*/}
      {/* <Box name='Mafalda' />
      <Box name='Percy' /> */}
      {/* {myArray.map((item, index) => {
        return (
          <div>
            <Box name={item.name} />
          </div>
        )
      })} */}

    </div>

  );
}

export default App;
