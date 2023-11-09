import React from 'react';
import { BrowserRouter as div, Routes, Route, Link } from 'react-router-dom';
import './nav.css';
import './pagina.css';
import Panel from './pagina';
import logo from "../img/pngwing.com.png";

const Navigation = () => {

const handleLogin = async () => {
  const response = await fetch('http://localhost:7777/get/GetZapatos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'email_del_usuario',
      password: 'contraseña_del_usuario'
    })
  });

  const data = await response.json();
  if (response.ok) {
    console.log(data);
  } else {
    console.error(data);
  }
};


  return (
    <div>
      <nav className="nav">
        <button className="login-btn" onClick={handleLogin}>Log In</button>
        <div className="links">
          <div className="product-info">
            <img src={logo} alt="Product" className="product-image" />
          </div>
          <div className='logos'>
            <Link to="/" className="link">Inicio</Link>
          </div>
          <div className='logos'>
            <Link to="/menu" className="link">Menu</Link>
          </div>
          <div className='logos'>
            <Link to="/novedades" className="link">Novedades</Link>
          </div>
          <div className='logos'>
            <Link to="/contacto" className="link">Contacto</Link>
          </div>
          <div className='settingsContenedor' >
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/menu" element={<Panel />} />
      </Routes>
    </div>
  );
};

export default Navigation;
