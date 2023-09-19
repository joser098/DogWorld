import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Nav from "./components/Nav/Nav";
import Account from "./components/Account/Account";
import DogForm from "./components/DogForm/DogForm";
import Detail from "./components/Detail/Detail";
import Loader from "./components/Loader/Loader";

// import Home from "./components/Home/Home";
const Home = lazy(() => import("./components/Home/Home"));
function App() {
  //   useEffect(() => {

  // }, []);

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Nav />
      )}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="Account" element={<Account />} />
          <Route path="newdog" element={<DogForm />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
