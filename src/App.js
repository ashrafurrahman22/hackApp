import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Pages/shared/Error';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div style={{
      fontFamily:"poppins"
    }}>

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
};

export default App;