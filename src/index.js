import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Admin from './components/Admin';
import Home from './components/Home';
import Cat from './components/Cat'
import Bunnies from './components/Bunnies'
import TeddyBear from './components/TeddyBear';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import CreateProducts from './components/CreateProducts';
import Shipping from './components/Shipping';
import UpdateProducts from './components/UpdateProducts';
import BuyTed from './components/BuyTed';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<App />}>
          <Route path="admins" element={<Admin />} />
          <Route path="shippings" element={<Shipping />} />
          <Route path="homes" element={<Home />} />
          <Route path="teddybear" element={<TeddyBear />} />
          <Route path="bunnies" element={<Bunnies />} />
          <Route path="cat" element={<Cat />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={< CreateProducts />} />
          <Route path='/admins/update/:id' element={< UpdateProducts />} />
          <Route path="buycart" element={< BuyTed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function createproduct() {
  return <CreateProducts />
}
function updateproduct() {
  return <UpdateProducts />
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
