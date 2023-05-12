import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Account from './components/Account/Account';
import DogForm from './components/DogForm/DogForm';

function App() {
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
      </Routes>
    </div>
  );
};

export default App;
