import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login';
import Mision from './pages/Mision';
import MenuInicio from './pages/MenuInicio';
import PrivateRoute from './components/PrivateRoute';
import Payment from './pages/Payment';


function App() {
  
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserInfo />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/mision' element={<Mision/>}/>
        <Route path='/dashboard' element={<Mision/>}/>
        <Route path='/menu/*' element={ <PrivateRoute element={<MenuInicio/>}/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}
  

export default App
