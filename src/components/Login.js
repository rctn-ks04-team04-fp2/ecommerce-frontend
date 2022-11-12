import React, {useState} from "react";
import '../style/Login.css';
import axios, { Axios } from 'axios';

const Login = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = () => {
        setError("");
        setPassword("");
        setUsername("");
        axios({
            url:"https://fakestoreapi.com/auth/login",
            method:'POST',
            data: {
                username: username,
                password: password
            },
        }).then((res) => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
        }).catch(err => {
            console.log(err.response);
            setError(err.response.data);
        })
    }
    return(
        <div className="login">
            <div className="loginInput">
                <input value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
                type="text" 
                placeholder="username"></input>

                <input value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
                type="password" 
                placeholder="password"></input>
                { error && <small>{error}</small> }
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
    )
}

export default Login