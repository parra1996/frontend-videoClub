import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Containers/Home/Home';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/profile'} element={<Profile/>} />
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/login'} element={<Login/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
