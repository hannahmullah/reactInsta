//create a function that does the equivalent of a fetch request on thunder client

async function login(username, email, password, setter) {
    try {
        const response = await fetch('http://localhost:5001/login', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
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

export default login;