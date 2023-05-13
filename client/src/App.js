import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Account from './components/Account/Account';
import DogForm from './components/DogForm/DogForm';
import Detail from './components/Detail/Detail';
import { useSelector } from 'react-redux';


function App() {
  const navigate = useNavigate();
  const state = useSelector(state => state.user);

//   useEffect(() => {
//     !state.session && navigate('/')
// }, [state]);

  const location = useLocation();
  return (
    <div className="App">
        {location.pathname !== '/' && location.pathname !== '/register' && <Nav/>}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='Account' element={<Account/>}/>
        <Route path='newdog' element={<DogForm/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
};

export default App;
