import React from 'react';
import { useState } from 'react';
import Login from './app/Login';
import Product from './app/Product';

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className='App'>
      <Product />
      {token ? <Product /> : <Login token={token} setToken={setToken} />}
    </div>
  );
}

export default App;
