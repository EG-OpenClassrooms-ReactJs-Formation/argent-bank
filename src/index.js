import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './index.css';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './pages/Profile/Profile';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route 
              path="/profile" 
              element={<PrivateRoute><Profile/></PrivateRoute>}
            ></Route>
            <Route path="/404" element={<Error/>}/>
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Router>
        <Footer/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
