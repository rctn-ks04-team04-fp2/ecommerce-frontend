import React from 'react';
import Login from '../components/Login';
import { useState } from 'react';

const LoginPage = ({auth, setAuth}) => {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="container mx-auto">
        <Login token={token} setToken={setToken} auth={auth} setAuth={setAuth} />
    </div>
  )
}

export default LoginPage