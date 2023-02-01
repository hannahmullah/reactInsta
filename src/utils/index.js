//create a function that does the equivalent of a fetch request on thunder client
import { storeCookie } from "../common";

async function login(username, email, password, setter, cookie) {
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
        cookie(data.token);
        storeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (jwt_token) => { //it doesnt have to be called kwt_Token but we are keeping it consistent
    try {
        const response = await fetch("http:localhost@5001/authCheck", { //http request
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt_token}`
            }
        })
        const data = await response.json;
        console.log("authCheck:", data);
        return data.username;
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (username, email, password, setter, cookie) => {
    try {
        const response = await fetch("http://localhost:5001/addUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token", data.token, 7);
    } catch (error) {
        console.log(error)
    }
}

// export default { login, authCheck };
// module.exports = { login, authCheck }