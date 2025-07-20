import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Success from './components/Success';
import Fail from './components/Fail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='success' element={<Success/>}></Route>
  <Route path='fail' element={<Fail/>}></Route>
 </Routes>
 </BrowserRouter>
);


reportWebVitals();
