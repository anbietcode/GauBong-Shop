import Header from './components/Header';

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return ( 
    <div className="App bg-home">
      <div className='app-header'>
        <Header/>
      </div>
      <div className='app-content'>
        <Outlet />
      </div>
      <div className='footer-content'>
        <Footer/>
      </div>
      
      <div>
        
      </div>
    </div>
  
  );
};

export default App;

