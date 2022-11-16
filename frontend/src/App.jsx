import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateUser from './pages/CreateUser';
import MakeTransaction from './pages/MakeTransaction';
import Transfers from './pages/Transfers';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/create-user' element={<CreateUser/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/make-transaction' element={<MakeTransaction/>} />
      <Route path='/Transfers' element={<Transfers/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App
